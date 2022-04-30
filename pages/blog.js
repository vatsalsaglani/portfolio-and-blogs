import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

import pick from "../lib/utils";

export async function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      pick(post, ["url", "title", "date", "desc", "readingTime", "slug"])
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div>
      <div className="bg-darkbg min-h-screen space-y-4">
        <Head>
          <title>Blogs | Vatsal Saglani</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <div className="mx-auto md:py-8 md:px-0 flex flex-col md:justify-start md:items-center">
          <Navigation />
        </div>
        <div className="p-16 md:p-12 flex flex-col md:block items-center justify-center mx-auto w-full md:w-[70%]">
          <div className="space-y-8">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
