import Link from "next/link";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import MDXComponents from "../components/MDXComponents";

import ViewCounter from "../components/ViewCounter";
import Footer from "../components/Footer";

// icons
import { SiLeetcode } from "react-icons/si";

const LeetCode = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div>
      <div className="min-h-screen">
        <article className="max-w-2xl mx-auto py-16 scroll-smooth">
          <div className="px-1 py-1 hover:bg-sky-600 hover:shadow-2xl hover:transition-all bg-sky-300 rounded-full shadow-md w-fit mb-6">
            <Link href="/">
              <a className="text-xs text-black uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-sky-50 my-2 font-Work">
              {post.title}
            </h1>
            <h2 className="text-xl font-semibold text-gray-100 my-2 font-Work">
              {post.question}
            </h2>
            <div className="flex flex-row justify-between items-center my-2">
              <div className="flex flex-col justify-start items-start space-y-1">
                <DifficultyTag tag={post.difficulty} link={post.questionLink} />
                <time
                  className="text-sm text-gray-400 font-Work "
                  dateTime={post.date}
                >
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </div>
              <div className="">
                <ViewCounter slug={post.slug} />
              </div>
            </div>
          </div>
          <div className="prose prose-invert my-2 font-Work">
            <MDXContent components={MDXComponents} />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export const DifficultyTag = ({ tag, link }) => {
  const tag2props = {
    HARD: {
      bg: "bg-gradient-to-tl from-orange-600 to-orange-500",
      dot: "bg-red-600",
    },
    MEDIUM: {
      bg: "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500",
      dot: "bg-yellow-400",
    },
    EASY: {
      bg: "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
      dot: "bg-green-600",
    },
  };

  return (
    <strong
      className={`relative inline-flex items-center rounded-md ${tag2props[tag].bg} px-5 py-1.5 `}
    >
      <span className="absolute -top-1 -left-1 h-2.5 w-2.5 animate-ping rounded-full bg-green-600/75 "></span>
      <span
        className={`absolute -top-1 -left-1 h-2.5 w-2.5 rounded-full ${tag2props[tag].dot}`}
      ></span>
      <span className="text-base font-medium font-Work text-gray-100">
        {tag}
      </span>
      <span className="ml-1">
        <Link href={link}>
          <a className="font-Work">
            <SiLeetcode color={"white"} size={20} />
          </a>
        </Link>
      </span>
    </strong>
  );
};

export default LeetCode;
