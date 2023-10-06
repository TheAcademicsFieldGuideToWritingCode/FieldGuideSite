import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    author: Author
    slug: string
    isCourse?: Boolean
}

const HeroPost = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    isCourse,
}: Props) => {
    return (
        <section className="rounded-md">
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-4xl lg:text-4xl leading-tight mb-2">
                    <Link
                        as={isCourse ? `/courses/${slug}` : `/posts/${slug}`}
                        href={isCourse ? `/courses/[slug]` : "/posts/[slug]"}
                        className="hover:underline"
                    >
                        {title}
                    </Link>
                </h3>
                <div className="text-lg text-slate-400">
                    <DateFormatter dateString={date} />
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div className="mb-8 md:mb-0">
                    <CoverImage title={title} src={coverImage} slug={slug} />
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                    <Avatar name={author.name} picture={author.picture} />
                </div>
            </div>
        </section>
    )
}

export default HeroPost
