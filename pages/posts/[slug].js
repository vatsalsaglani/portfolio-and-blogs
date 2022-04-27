import Head from "next/head";

import { allPosts } from "contentlayer/generated";

import Post from "../../layout/PostLayout";
export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${params.slug}`
  );
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }) => {
  return (
    <div className="bg-darkbg">
      <Head>
        <title>{post.title}</title>

        <meta name="description" content={post.desc} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.desc} />
        <meta property="og:url" content={post.url} />
        <meta property="og:type" content={"article"} />
        <meta property="og:locale" content="en_US" />
        {post?.thumbnail ? (
          <meta property="og:image" content={post.thumbnail} />
        ) : null}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@saglanivatsal" />
        <meta name="twitter:creator" content="@saglanivatsal" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.desc} />
        <meta name="twitter:image" content={post?.thumbnail} />

        <meta name="article:published_time" content={post.date} />
        <meta name="article:section" content={"Article Section"} />
        <meta name="article:tag" content={"Article Tag"} />
      </Head>

      <div className="block">
        <div className="fixed z-10 w-full h-2 bg-gradient-to-r from-sky-400 to-green-200"></div>
        <Post post={post} />
      </div>
    </div>
  );
};

export default PostLayout;
