import { useState } from 'react'
import Layout from '~/components/layout'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    AcademicCapIcon,
    CheckCircleIcon,
    HandRaisedIcon,
    RocketLaunchIcon,
    SparklesIcon,
    SunIcon,
    UserGroupIcon,
} from '@heroicons/react/20/solid'

const team = [
    {
        name: 'Nathan Laundry',
        role: 'Founder, Lead Writer',
        imageUrl:
            '/assets/blog/authors/NathanAuthor.jpg',
        location: 'Toronto, Canada',
    },
    {
        name: 'Chris Prebble',
        role: 'Editor, Content and Audience Manager',
        imageUrl:
            '/assets/blog/authors/Chris.jpg',
        location: 'Toronto, Canada',
    },
    {
        name: 'Hyuna Cho',
        role: 'Editor and Writer',
        imageUrl:
            '/assets/blog/authors/Hyuna.jpg',
        location: 'Toronto, Canada',
    },
]

export default function Index() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <Layout>

            <main className="relative isolate">
                {/* Background */}
                <div
                    className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>

                {/* Header section */}
                <div className="px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Programming should be accessible</h2>
                        <p className="mt-6 text-lg leading-8 text-slate-300"> We want to make it easy for you to learn <span className="font-semibold">just what you need</span> exactly <span className="font-semibold"> when you need it</span>. That's why the Academic's Field Guide to Writing Code is designed to be:</p>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">

                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-slate-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                            <div className="relative pl-9">
                                <dt className="text-xl font-semibold text-white block">
                                    {/* Replace with appropriate icon */}
                                    <span className="absolute left-1 top-1 h-5 w-5 text-cyan-500" aria-hidden="true">🚀</span>
                                    Application First
                                </dt>
                                <dd className="mt-2">Every tutorial and guide is designed with an ‘Application-First’ approach, ensuring that you can immediately apply the concepts learned to your work or research in the social and behavioural sciences.</dd>
                            </div>
                            <div className="relative pl-9">
                                <dt className="text-xl font-semibold text-white block">
                                    {/* Replace with appropriate icon */}
                                    <span className="absolute left-1 top-1 h-5 w-5 text-cyan-500" aria-hidden="true">🎯</span>
                                    Social & Behavioural Science Specific
                                </dt>
                                <dd className="mt-2">All applications and examples are meticulously tailored for tasks and challenges relevant to social and behavioural science work, such as data analysis, online data collection, and social network analysis.</dd>
                            </div>
                            <div className="relative pl-9">
                                <dt className=" text-xl font-semibold text-white block">
                                    {/* Replace with appropriate icon */}
                                    <span className="absolute left-1 top-1 h-5 w-5 text-cyan-500" aria-hidden="true">🖥️</span>
                                    Interactive Learning
                                </dt>
                                <dd className="mt-2">Our tutorials are interactive, allowing you to execute and test code within the browser for a hands-on learning experience, without the need for additional setup or environment configuration.</dd>
                            </div>
                            <div className="relative pl-9">
                                <dt className="text-xl font-semibold text-white block">
                                    {/* Replace with appropriate icon */}
                                    <span className="absolute left-1 top-1 h-5 w-5 text-cyan-500" aria-hidden="true">📚</span>
                                    Free & Open Source
                                </dt>
                                <dd className="mt-2">We provide free and open-source Python code that can be used as-is or adapted to your needs at zero cost. This includes packages for web scraping, API usage, and more.</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Team section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Our Team</h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300"></p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 "
                    >
                        {team.map((person) => (
                            <li key={person.name}>
                                <Image width={500} height={500} className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                                <p className="text-base leading-7 text-slate-300">{person.role}</p>
                                <p className="text-sm leading-6 text-slate-500">{person.location}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA section */}
                {/*
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our team</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                  in accusamus quisquam.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a href="#" className="text-sm font-semibold leading-6 text-cyan-400">
                    See our job postings <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
        */}
            </main>
        </Layout>
    )
}

