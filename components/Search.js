export default function Search({ value, setter }) {
  return (
    <div className="relative mb-6 bg-darkbg">
      <label className="sr-only" htmlFor="search">
        Search
      </label>

      <input
        className="w-full py-3 pl-3 pr-12 text-sm border-2 border-sky-200 rounded-md bg-darkbg text-white"
        id="search"
        type="search"
        placeholder="Search"
        onChange={(e) => {
          setter(e);
        }}
        value={value}
      />

      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </div>
  );
}
