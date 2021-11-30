import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}


const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const pageTitle: string = 'Eoin Traynor Website';
  return (
    <>
      <Layout>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Container>
          <h1>Hello</h1>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
