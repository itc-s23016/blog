import Hero from 'components/hero'
const Blog = () => {
  const props = { title: 'Blog', subtitle: 'Recent Posts' }
  return <Hero {...props} />
}
export default Blog
