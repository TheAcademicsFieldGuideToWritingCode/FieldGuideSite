import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Header from '../components/header'
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
            <div className="bg-cyan-900 p-12 mb-16">
                <div className="flex flex-col lg:flex-row">

                    <div className="lg:w-1/2 p-12">
                        <Card className="bg-cyan-900 border-none text-slate-50">
                            <CardHeader className="">
                                <CardTitle>Welcome to The Academic's Field Guide to Writing Code</CardTitle>
                                <CardDescription className="text-slate-50">Interactive Coding Tutorials for Social Scientists</CardDescription>
                            </CardHeader>
                            <CardContent className=" p-8 text-slate-50">
                                <div className="mb-8">
                                    <h2 className="text-5xl" >Application-First</h2>
                                    <h2 className="text-5xl" >Interactive</h2>
                                    <h2 className="text-5xl" >Free Open Source Code</h2>
                                </div>
                                <p className="mb-4">
                                    Exactly what you need to know, right when you need it.
                                    Programming guides specially designed for individuals in <span className="font-semibold">Psychology</span>, <span className="font-semibold">Sociology</span>, and other Social Sciences.
                                </p>
                                <p className="mb-4">
                                    For some, programming is a passion, for others, it's a tool.
                                    There's a wealth of programming tutorials online, but most are designed to help learners become professional or hobby programmers.
                                    The Field Guide is designed for those whose interests lie elsewhere but want to build a computational tool-kit for their work and research.
                                </p>
                                <p>
                                    Our tutorials, examples, and practice problems are all crafted with an <span className="font-semibold">Application-First</span> mentality, meaning you see right away how each concept, and tool is applicable to your work.
                                </p>
                                <p>
                                    Most importantly, each guide comes with free and open source code, as well as interactive examples you can run straight from your browser. Check it out.
                                </p>
                            </CardContent>
                            <CardFooter className=" p-8">
                                <Button className="bg-teal-600">
                                    <Link href="/signup">
                                        Sign Up for Free
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
                        <PythonProvider packages={packages}>
                        <CodeBlock defaultCode={exampleCode}/>
</PythonProvider>
                    </div>

                </div>
            </div>
            <Layout>
                <Head>
                    <title>The Academic's Field Guide to Writing Code</title>
                </Head>

                <Container>
                    <div className=" drop-shadow-lg border-t-8 border-solid border-teal-500 bg-white p-12 rounded-lg mb-8">
                        <h2 className="text-slate-900 text-6xl font-bold mb-16">The "I just need a little code" Course</h2>
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

                    <div className="border-solid bg-white p-12 rounded-lg mb-8 drop-shadow-md">
                        {moreCourses.length > 0 && <MoreStories posts={moreCourses} />}
                    </div>

                    <div className="drop-shadow-lg border-t-8 border-solid border-red-400 bg-white p-12 rounded-lg mb-8">
                        <h2 className="text-7xl font-bold mb-8">Blog Posts</h2>
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

                    <div className="border-solid bg-white p-12 rounded-lg mb-8 drop-shadow-md">
                        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
