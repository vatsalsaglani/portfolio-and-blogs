import Link from "next/link";
import useSWR from "swr";

import fetcher from "../lib/fetcher";

import { format, parseISO } from "date-fns";

const LeetCodeCard = (leetcode) => {
  const { data } = useSWR(`/api/views/${leetcode.slug}`, fetcher, {
    refreshInterval: 10000,
  });
  const views = data?.total;

  return (
    <div>
      <Link href={leetcode.url}>
        <a className="relative block group">
          <span className="absolute inset-0 border-2 border-sky-200 border-dashed rounded-md"></span>
          <div className="relative flex flex-row justify-center items-center h-full transition-transform transform rounded-md bg-darkbg border-2 border-sky-200 group-hover:-translate-x-2 group-hover:-translate-y-2 p-8">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <div className="flex flex-row justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time
                  dateTime={leetcode.date}
                  className=" text-sm text-gray-400 font-Work"
                >
                  {format(parseISO(leetcode.date), "LLLL d, yyyy")}
                </time>
              </div>

              <h2 className="mt-4 text-2xl font-medium text-gray-50 font-Work">
                {leetcode.title}
              </h2>
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
            <div className="absolute p-2 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium text-gray-50 font-Work">
                {leetcode.title}
              </h2>

              <p className="mt-4 font-Work text-gray-50">{leetcode.question}</p>

              <p className="mt-8 font-bold font-Work text-gray-50">
                {"READ MORE"}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LeetCodeCard;
