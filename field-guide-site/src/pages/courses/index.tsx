
import Container from '~/components/container'
import MoreStories from '~/components/more-stories'
import HeroCourse from '~/components/hero-post'
import Layout from '~/components/layout'
import { getAllCourses } from '~/lib/api'
import Course from '~/interfaces/post'


type Props = {
    allCourses: Course[]
    allCourses: Course[]
}
export default function CourseHomePage({ allCourses }: Props) {
    const heroCourse = allCourses[0]
    const moreCourses = allCourses.slice(1)

    return (
            <Layout>
                <div className="mt-16"/>
                <Container>
                    <div className="drop-shadow-lg border-t-8 border-solid border-cyan-400 bg-slate-700 p-3 lg:p-12 rounded-lg mb-8 text-white">
                        <h2 className="text-slate-100 text-5xl font-bold ">The Field Guide Foundations Course</h2>
                        <h4 className="text-slate-300 text-2xl  mb-12">Our beginner python to data collection, analysis, and applications course.</h4>
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
