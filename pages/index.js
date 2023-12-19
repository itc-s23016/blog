import Container from 'components/container'
import Hero from 'components/hero'

const Home = () => {
  const props = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
  return (
    <Container>
      <Hero {...props} imageOn />
    </Container>
  )
}

export default Home
