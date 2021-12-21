import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import Post from '../types/post';
type Props = {
  allPosts: Post[]
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlogTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const title: string = "My awesome blog";

const List = styled.ul`
  list-style: square;
`;

const ListItem = styled.li`
  padding: 10px;
  text-transform: capitalize;
  margin: 40px 0;
  cursor: pointer;
  color: #252525;
  &:hover {
    background: #f0f0f0;
  }
`;

const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const pageTitle: string = 'Eoin Traynor Website';
  const blogPosts: string = 'Blog Posts';

  return (
      <Container>
        <Head>
          <title>{pageTitle}</title>
        </Head>
          <Main>
            <BlogTitle>{blogPosts}</BlogTitle>
            <Link href={"/about"}>About this blog</Link>
            <List>
              { allPosts.map(post => (
                <Link key={post.id} href={"/articles/[id]"} as={`/articles/${post.id}`} passHref>
                  <ListItem>
                    <PostTitle>{post.title}</PostTitle>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Main>
      </Container>
  )
}

export default Index

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const allPosts = await response.json();
  return {
    props: {
      allPosts,
    },
  }
}
