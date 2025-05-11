import React from "react";

function ButtonFullRecipe({ recipe }) {
  return (
    <button
      className="flex items-center bg-blue-600 text-white gap-1 px-4 py-2 cursor-pointer  border border-transparent font-semibold tracking-widest rounded-md hover:bg-gray-50 hover:border-solid hover:border-blue-600 duration-300 hover:gap-2 hover:translate-x-3 hover:text-blue-800 mb-3"
      onClick={recipe}
    >
      {" "}
      View full recipe
      <svg
        className="w-5 h-5"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  );
}

export default ButtonFullRecipe;
