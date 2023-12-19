import Container from 'components/container'
import Hero from 'components/hero'
const Blog = () => {
  const props = { title: 'Blog', subtitle: 'Recent Posts' }
  return (
    <Container>
      <Hero {...props} />
    </Container>
  )
}
export default Blog
