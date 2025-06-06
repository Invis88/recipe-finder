import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="cursor-pointer duration-200 hover:scale-125 active:scale-100 "
        title="Go Back"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          className="stroke-blue-400"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default ButtonBack;
