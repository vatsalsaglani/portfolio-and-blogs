import Link from "next/link";
import useSWR from "swr";

import fetcher from "../lib/fetcher";

import { format, parseISO } from "date-fns";

const PostCard = (post) => {
  const { data } = useSWR(`/api/views/${post.slug}`, fetcher, {
    refreshInterval: 10000,
  });
  const views = data?.total;

  return (
    <div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative bg-darkbg mb-6 border-b-2 border-b-sky-200 border-t-2 border-t-sky-300 rounded-xl p-4 hover:border-b-0 hover:border-l-2 hover:border-l-sky-300 hover:border-t-0 hover:border-r-2 hover:ease-linear hover:border-r-sky-200 hover:transition-all ">
          <div className="flex items-start justify-between ">
            <h2 className="text-lg md:text-xl font-bold">
              <Link href={post.url}>
                <a className="text-blue-50 hover:text-blue-400 font-Work">
                  {post.title}
                </a>
              </Link>
            </h2>
            <time
              dateTime={post.date}
              className=" text-sm text-gray-400 font-Work"
            >
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </div>
          <div className="text-blue-200 my-1">{post.desc}</div>
          <div className="text-blue-200 flex flex-row-reverse justify-between font-Work">
            {post.readingTime.text}
            <div className="text-sky-100 flex flex-row space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <div className="text-gray-400 font-Work">{views}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
