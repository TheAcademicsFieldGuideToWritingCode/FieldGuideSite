type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-8 md:px-16 lg:px-64">{children}</div>
}

export default Container
