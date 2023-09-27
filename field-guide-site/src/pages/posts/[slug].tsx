'use client'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import path from 'path';

import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import Layout from '../../components/layout'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'

import dynamic from 'next/dynamic'


import { PythonProvider } from 'react-py/dist/providers/PythonProvider'

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
    // Ensure post and post.slug are defined
    if (!post?.slug) return <ErrorPage statusCode={404} />

    // Dynamic import for the MDX file based on the slug
    const PostContent = dynamic(() => import(`../../../_posts/content/${post?.slug}_content.mdx`), { 
        loading: () => <p>Loading...</p>,
        ssr: false 
    });

    const router = useRouter()
    const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="mb-32">
                            <Head>
                                <title>{title}</title>
                                <meta property="og:image" content={post.ogImage.url} />
                            </Head>
                            <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                            />
                            <PythonProvider>
                                <PostContent/>
                            </PythonProvider>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'ogImage',
        'coverImage',
    ])
    console.log(post)

    return {
        props: {
            post: {
                ...post,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
