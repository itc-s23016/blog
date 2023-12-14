import Hero from 'components/hero'

const Home = () => {
  const props = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
  return <Hero {...props} imageOn />
}

export default Home
