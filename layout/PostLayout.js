import Link from "next/link";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import MDXComponents from "../components/MDXComponents";

import ViewCounter from "../components/ViewCounter";
import Footer from "../components/Footer";

const Post = ({ post }) => {
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
          <div className=" mb-6">
            <h1 className="text-3xl font-bold text-sky-50 mb-1">
              {post.title}
            </h1>
            <div className="flex flex-row justify-between items-center">
              <time dateTime={post.date} className="text-sm text-gray-400">
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>

              <ViewCounter slug={post.slug} />
            </div>
          </div>
          {post?.thumbnail ? (
            <div>
              <Image
                src={post.thumbnail}
                width={1501 / 2}
                height={712 / 2}
                priority
                className="rounded-lg shadow-2xl"
              />
            </div>
          ) : null}
          <div className="prose prose-invert my-2">
            <MDXContent components={MDXComponents} />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
