import { memo } from "react";

const SearchBar = ({ setState, state, handleSearch }) => {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="flex items-center w-full">
          <div className="relative w-full">
            <div className="absolute w-full inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              type="text"
              value={state}
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full  pl-10 p-1 sm:p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
          <button
            onClick={handleSearch}
            type="submit"
            className="p-1.5 sm:p-2.5 ml-2 text-sm font-medium text-white bg-green-400 rounded-lg border border-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-3 sm:w-5 h-3 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(SearchBar);
