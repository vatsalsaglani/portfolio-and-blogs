import { useEffect } from "react";
import useSWR from "swr";

import fetcher from "../lib/fetcher";

export default function ViewCounter({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher, {
    refreshInterval: 10000,
  });
  const views = new Number(data?.total);
  // console.log("VIES: ", views);s
  useEffect(() => {
    const registerView = () => fetch(`/api/views/${slug}`, { method: "POST" });
    registerView();
  }, [slug]);
  return (
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
      <div className="text-gray-400 font-Work">{`${
        views > 0 ? views.toLocaleString() : "–––"
      }`}</div>
    </div>
  );
  //   return <span>{`${views > 0 ? views.toLocaleString() : "–––"}views`}</span>;
}
