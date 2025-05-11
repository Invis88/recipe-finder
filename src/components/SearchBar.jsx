import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    const initial = params.get("query");
    if (initial) {
      setInput(initial);
    }
  }, [location.search]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") {
      return;
    }
    navigate(`/results?query=${encodeURIComponent(input)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mb-6"
    >
      <div className="relative w-[480px] bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          className="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
          placeholder="Search for recipes"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="absolute right-1 top-1 bottom-1 px-6 bg-blue-600 text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4]">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
