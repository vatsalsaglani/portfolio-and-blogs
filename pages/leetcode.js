import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allLeetcodes } from "contentlayer/generated";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LeetCodeCard from "../components/LeetCodeCard";
import Search from "../components/Search";

import pick from "../lib/utils";

export async function getStaticProps() {
  const leetcodes = allLeetcodes
    .map((lc) =>
      pick(lc, [
        "url",
        "title",
        "question",
        "difficulty",
        "readingTime",
        "slug",
        "date",
      ])
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return { props: { leetcodes } };
}

export default function LeetCode({ leetcodes }) {
  const [searchText, setSearchText] = useState("");

  const filtered_lc = leetcodes.filter(
    (lc) =>
      lc.title.toLowerCase().includes(searchText.trim().toLowerCase()) ||
      lc.question.toLowerCase().includes(searchText.trim().toLowerCase())
  );

  const onChangeSearch = (event) => {
    let v = event.target.value;
    setSearchText(v);
  };

  return (
    <div>
      <div className="bg-darkbg min-h-screen space-y-4">
        <Head>
          <title>Leetcode | Vatsal Saglani</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            name="description"
            content={
              "Vatsal Saglani's space to post his leetcode solutions on the internet."
            }
          />
          <meta
            property="og:title"
            content={
              "Vatsal Saglani's space to post his leetcode solutions on the internet"
            }
          />
          <meta
            property="og:description"
            content={
              "Vatsal Saglani's space to post his leetcode solutions on the internet."
            }
          />
          <meta
            property="og:url"
            content={"https://www.vatsalsaglani.dev/leetcode"}
          />
          <meta property="og:type" content={"article"} />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@saglanivatsal" />
          <meta name="twitter:creator" content="@saglanivatsal" />
          <meta
            name="twitter:title"
            content={
              "Vatsal Saglani's space to post his leetcode solutions on the internet"
            }
          />
          <meta
            name="twitter:description"
            content={
              "Vatsal Saglani's space to post his leetcode solutions on the internet."
            }
          />
        </Head>

        <div className="mx-auto md:pt-8 md:px-0 flex flex-col md:justify-start md:items-center">
          <Navigation />
        </div>
        <div className="p-16 md:p-12 flex flex-col md:block items-center justify-center mx-auto w-full md:w-[70%]">
          <Search value={searchText} setter={onChangeSearch} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {filtered_lc.map((lc, idx) => (
              //   <PostCard key={idx} {...post} />
              <LeetCodeCard key={idx} {...lc} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
