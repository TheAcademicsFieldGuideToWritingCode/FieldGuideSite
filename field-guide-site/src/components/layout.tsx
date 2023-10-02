import Alert from './alert'
import Footer from '~/components/ui/footer'
import Meta from './meta'
import NavMenu from '~/components/ui/nav-menu'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
        <NavMenu/>
      <div className="min-h-screen mb-16">
        <main>{children}</main>
      </div>
    
      <Footer />
    </>
  )
}

export default Layout
