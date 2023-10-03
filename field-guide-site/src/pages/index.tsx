import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPosts, getAllCourses } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "~/components/ui/button"
import CodeBlock from '~/components/CodeBlock'
import { PythonProvider } from 'react-py/dist/providers/PythonProvider'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"


// const background_img = require("/assets/computer.jpg");
import background_img from '/assets/computer.jpg'


type Props = {
    allPosts: Post[]
    allCourses: Post[]
}

const exampleCode = `
import requests
from cowsay import cowsay
response = requests.get('https://reqres.in/api/users/2')
data = response.json()

print(cowsay("I heard you like data so I got you some."))

print(data)
`


const packages = {
    official: [],
    micropip: ['python-cowsay', 'requests'],
}

export default function Index({ allPosts, allCourses }: Props) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    const heroCourse = allCourses[0]
    const moreCourses = allCourses.slice(1)
    return (
        <>
            <Layout>
            <div style={{ backgroundImage: `url(${background_img.src})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} className=" p-3 lg:p-12 mb-16">
                <div className="flex flex-col lg:flex-row">

                    <div className="lg:w-1/2 p-3 lg:p-12">
                        <Card className="bg-slate-800/80 drop-shadow-md border-none text-white">
                            <CardHeader className="">
                                <CardTitle className="text-4xl font-bold">The Academic's Field Guide to Code</CardTitle>
                                <CardDescription className="text-lg text-slate-300">Coding Tutorials for Social and Behavioural Scientists</CardDescription>
                            </CardHeader>
                            <CardContent className="lg:p-8 text-slate-200">
                                <div className="mb-8">
                                    <h2 className="text-5xl font-semibold">Application-First</h2>
                                    <h2 className="text-5xl font-semibold">Interactive</h2>
                                    <h2 className="text-5xl font-semibold">Open Source</h2>
                                </div>
                                <p className="mb-4">
                                    Tailored guides for <span className="font-semibold ">Psychology</span> and <span className="font-semibold ">Sociology</span> students and professionals, providing essential programming skills for research.
                                </p>
                                <p className="mb-4">
                                    The Field Guide is crafted for students and researchers looking to build a <span className="font-semibold "> computational toolkit </span> without the need to become professional programmers. That's why we've made all our code freely available to edit and use on <span>

 <Link href="https://github.com/orgs/TheAcademicsFieldGuideToWritingCode/repositories" className="font-semibold">our github. </Link></span>
                                </p>
                                <p>
                                    With an <span className="font-semibold">Application-First</span> approach, immediately apply concepts and tools to your work through our interactive examples and free open-source code.
                                </p>
                            </CardContent>
                            <CardFooter className="p-8">
                                <Button className="bg-cyan-600 hover:bg-cyan-700">
                                    <Link href="/signup" className="text-white">Sign Up Free</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
                        <PythonProvider packages={packages}>
                            <CodeBlock defaultCode={exampleCode} />
                        </PythonProvider>
                    </div>

                </div>
            </div>
                <Head>
                    <title>The Academic's Field Guide to Writing Code</title>
                </Head>

                <Container>
                    <div className="drop-shadow-lg border-t-8 border-solid border-cyan-400 bg-slate-700 p-3 lg:p-12 rounded-lg mb-8 text-white">
                        <h2 className="text-slate-100 text-5xl font-bold ">The Field Guide Foundations Course</h2>
                        <h4 className="text-slate-300 text-2xl  mb-12">Our beginner python to data collection, analysis, and applications course.</h4>
                        {heroCourse && (
                            <HeroPost
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

                    <div className="drop-shadow-lg border-t-8 border-solid border-teal-400 bg-slate-700 p-3 lg:p-12 rounded-lg mb-8 text-white">
                        <h2 className="text-slate-100 text-5xl font-bold mb-8">Articles</h2>
                        <h4 className="text-slate-300 text-2xl  mb-12">An assortment of tutorials and opinion pieces that don't fit into any one course</h4>
                        {heroPost && (
                            <HeroPost
                                title={heroPost.title}
                                coverImage={heroPost.coverImage}
                                date={heroPost.date}
                                author={heroPost.author}
                                slug={heroPost.slug}
                                excerpt={heroPost.excerpt}
                            />
                        )}
                    </div>

                    <div className="bg-slate-700 p-3 lg:p-12 rounded-lg mb-8 drop-shadow-md text-white">
                        {morePosts.length > 0 && <MoreStories title="More Articles" posts={morePosts} />}
                    </div>
                </Container>
            </Layout>
        </>
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
        'isCourse',
    ])

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
        props: { allPosts, allCourses },
    }
}
