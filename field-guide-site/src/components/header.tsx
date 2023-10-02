import Link from 'next/link'

const Header = () => {
  return (
<div className="">
    <h2 className="text-slate-200 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        The Academic's Field Guide to Writing Code
      </Link>
    </h2>
</div>
  )
}

export default Header
