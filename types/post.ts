// type PostType = {
//   slug: string
//   title: string
//   date: string
//   coverImage: string
//   author: Author
//   excerpt: string
//   ogImage: {
//     url: string
//   }
//   content: string
// }

type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default PostType;
