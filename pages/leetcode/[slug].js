import Head from "next/head";

import { allLeetcodes } from "contentlayer/generated";

import LeetCode from "../../layout/LeetCodeLayout";

export async function getStaticPaths() {
  const paths = allLeetcodes.map((leetcode) => leetcode.url);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const leetcode = allLeetcodes.find(
    (lc) => lc._raw.flattenedPath === `leetcode/${params.slug}`
  );

  return {
    props: {
      leetcode,
    },
  };
}

const LeetCodeLayout = ({ leetcode }) => {
  //   console.log("LEETCODE: ", leetcode);

  return (
    <div className="bg-darkbg">
      <Head>
        <title>{leetcode.title}</title>

        <meta name="description" content={leetcode.desc} />
        <meta property="og:title" content={leetcode.title} />
        <meta property="og:description" content={leetcode.question} />
        <meta property="og:url" content={leetcode.url} />
        <meta property="og:type" content={"article"} />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@saglanivatsal" />
        <meta name="twitter:creator" content="@saglanivatsal" />
        <meta name="twitter:title" content={leetcode.title} />
        <meta name="twitter:description" content={leetcode.question} />

        <meta name="article:published_time" content={leetcode.date} />
        <meta name="article:section" content={"Article Section"} />
        <meta name="article:tag" content={leetcode.difficulty} />
      </Head>
      <div className="block">
        <LeetCode post={leetcode} />
      </div>
    </div>
  );
};

export default LeetCodeLayout;
