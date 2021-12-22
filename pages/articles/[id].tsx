import { Article } from '@components/Article';
import { FeedbackForm } from '@components/feedback-form';
import { PostImage } from '@components/post-image';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import PostType from '../../types/post';

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title } = post;
  return (
    <Article>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={post.title} />
      </Head>
      <PostImage src="/assets/blog/preview/cover.jpg" alt={post.title} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <FeedbackForm />
    </Article>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const emptyPost: PostType = {
    title: 'Post not found',
    body: '',
    id: 0,
    userId: 0,
  };

  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      },
    };
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const post: PostType = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostType[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
