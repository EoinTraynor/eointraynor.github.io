import { Article } from '@components/Article';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import PostType from '../../types/post';

const BlogPost = ({ title, body }: PostType) => {
  return (
    <Article>
      <h1>{title}</h1>
      <p>{body}</p>
    </Article>
  )
}

export default BlogPost;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const emptyPost = {
    id: 0,
    userId: 0,
    body: 0,
    title: 0,
  }
  const { params = emptyPost } = context;


  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      }
    }
  }
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post: PostType = await response.json();
  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: PostType[] = await response.json();

  const paths = posts.map(post => ({
    params: { id: post.id.toString()}
  }));

  return {
    paths,
    fallback: false,
  }
}
