import styled from '@emotion/styled'
import Head from 'next/head'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'
type Props = {
  allPosts: Post[]
}

const Container = styled.div``
const Main = styled.main``
const Title = styled.h1`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
`
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
          <Main>
            <Title>Hello</Title>
          </Main>
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
