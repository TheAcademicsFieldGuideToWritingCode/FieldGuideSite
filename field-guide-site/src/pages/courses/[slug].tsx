
'use client'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../../components/container'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import Layout from '../../components/layout'
import MoreStories from '~/components/more-stories'

import { getCoursesBySlug, getAllCourses } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import type PostType from '../../interfaces/post'

import dynamic from 'next/dynamic'


import { PythonProvider } from 'react-py/dist/providers/PythonProvider'



const packages = {
    official: [],
    micropip: ['pyodide-http', 'python-cowsay', 'requests'],
}

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
    // Ensure post and post.slug are defined
    if (!post?.slug) return <ErrorPage statusCode={404} />

    // Dynamic import for the MDX file based on the slug
    const PostContent = dynamic(() => import(`../../../_courses/content/${post?.slug}_content.mdx`), {
        loading: () => <p>Loading...</p>,
        ssr: false
    });

    const router = useRouter()
    const title = `${post.title}`
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            <Container>
                <article className="prose prose-lg">
                    <Header />
                    {router.isFallback ? (
                        <PostTitle>Loading…</PostTitle>
                    ) : (
                        <>
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
                            <PythonProvider packages={packages}>
                                <PostContent />
                            </PythonProvider>
                        </>
                    )}
                </article>
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
    const post = getCoursesBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'ogImage',
        'coverImage',
    ])

    return {
        props: {
            post: {
                ...post,
            }
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllCourses(['slug'])

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
