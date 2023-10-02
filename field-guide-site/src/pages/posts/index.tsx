
import Container from '~/components/container'
import MoreStories from '~/components/more-stories'
import HeroPost from '~/components/hero-post'
import Layout from '~/components/layout'
import { getAllPosts } from '~/lib/api'
import Post from '~/interfaces/post'


type Props = {
    allPosts: Post[]
}
export default function Index({ allPosts }: Props) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)

    return (
            <Layout>
                <Container>
                    <div className="mt-8"/>
                    <div className="drop-shadow-lg border-t-8 border-solid border-cyan-400 bg-slate-700 p-3 lg:p-12 rounded-lg mb-8 text-white">
                        <h2 className="text-slate-100 text-5xl font-bold mb-12 ">Our Latest Article</h2>
                        {heroPost && (
                            <HeroPost
                                title={heroPost.title}
                                coverImage={heroPost.coverImage}
                                date={heroPost.date}
                                author={heroPost.author}
                                slug={heroPost.slug}
                                excerpt={heroPost.excerpt}
                                isCourse={false}
                            />
                        )}
                    </div>

                    <div className="bg-slate-700 p-3 lg:p-12 rounded-lg mb-8 text-white">
                        {morePosts.length > 0 && <MoreStories title="Other Articles" posts={morePosts} />}
                    </div>

                </Container>
            </Layout>
)
}


export const getStaticProps = async () => {

    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'isPost',
    ])

    return {
        props: { allPosts },
    }
}
