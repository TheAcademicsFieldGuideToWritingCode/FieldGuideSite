
import Container from '~/components/container'
import MoreStories from '~/components/more-stories'
import HeroCourse from '~/components/hero-post'
import Layout from '~/components/layout'
import { getAllCourses } from '~/lib/api'
import Course from '~/interfaces/post'


type Props = {
    allCourses: Course[]
}
export default function CourseHomePage({ allCourses }: Props) {
    const heroCourse = allCourses[allCourses.length - 1];
    const moreCourses = [...allCourses.slice(0, -1)];

    return (
        <Layout>
            <div className="mt-16" />
            <Container>
                <div className="drop-shadow-lg border-t-8 border-solid border-cyan-400 bg-slate-700 p-3 lg:p-12 rounded-lg mb-8 text-white">
                    <h2 className="mb-4 text-slate-100 text-5xl font-bold">The Field Guide Foundations Course</h2>
                    <h4 className="text-slate-300 text-2xl mb-12">Our 0 pre-requisites Python for Social-Behavioural Scientists 12 week Course</h4>

                    <h5 className="text-slate-200 text-xl mb-4">In this course you’ll learn:</h5>
                    <ul className="list-disc pl-4 mb-8 text-slate-200 border-b-2 border-solid pb-4">
                        <li className="mb-2">the basics of python including: variables, conditionals, loops and functions</li>
                        <li className="mb-2">data structures with respect to data analysis packages like pandas and numpy</li>
                        <li className="mb-2">Data collection methods like web scraping, use of APIs</li>
                        <li className="mb-2">using LLMs for Social-Behavioural Science research</li>
                    </ul>
                    {heroCourse && (
                        <HeroCourse
                            title={heroCourse.title}
                            coverImage={heroCourse.coverImage}
                            date={heroCourse.date}
                            author={heroCourse.author}
                            slug={heroCourse.slug}
                            excerpt={heroCourse.excerpt}
                            isCourse={true}
                        />
                    )}
                </div>

                <div className="bg-slate-700 p-3 lg:p-12 rounded-lg mb-8 text-white">
                    {moreCourses.length > 0 && <MoreStories title="Other Course Content" posts={moreCourses} />}
                </div>

            </Container>
        </Layout>
    )
}


export const getStaticProps = async () => {

    const allCourses = getAllCourses([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'isCourse',
    ])

    return {
        props: { allCourses },
    }
}
