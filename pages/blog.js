import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

import pick from "../lib/utils";
import Search from "../components/Search";

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
  const [searchText, setSearchText] = useState("");

  const onChangeSearch = (event) => {
    let v = event.target.value;
    setSearchText(v);
  };

  const filtered_posts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.trim().toLowerCase()) ||
      post.desc.toLowerCase().includes(searchText.trim().toLowerCase())
  );

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
          <meta
            name="description"
            content={
              "Vatsal Saglani's space to blog on the internet. Here, he writes blogs related to Deep Learning, Machine Learning, NLP, Computer Vision, React, Backend, and Databases."
            }
          />
          <meta
            property="og:title"
            content={"Vatsal Saglani's space to blog on the internet"}
          />
          <meta
            property="og:description"
            content={
              "Vatsal Saglani's space to blog on the internet. Here, he writes blogs related to Deep Learning, Machine Learning, NLP, Computer Vision, React, Backend, and Databases."
            }
          />
          <meta
            property="og:url"
            content={"https://www.vatsalsaglani.dev/blogs"}
          />
          <meta property="og:type" content={"article"} />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@saglanivatsal" />
          <meta name="twitter:creator" content="@saglanivatsal" />
          <meta
            name="twitter:title"
            content={"Vatsal Saglani's space to blog on the internet"}
          />
          <meta
            name="twitter:description"
            content={
              "Vatsal Saglani's space to blog on the internet. Here, he writes blogs related to Deep Learning, Machine Learning, NLP, Computer Vision, React, Backend, and Databases."
            }
          />
        </Head>
        <div className="mx-auto md:pt-8 md:px-0 flex flex-col md:justify-start md:items-center">
          <Navigation />
        </div>
        <div className="p-16 md:p-12 flex flex-col md:block items-center justify-center mx-auto w-full md:w-[70%]">
          <Search value={searchText} setter={onChangeSearch} />
          <div className="space-y-8 mt-12">
            {filtered_posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
