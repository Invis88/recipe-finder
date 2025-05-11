import React from "react";
import { Link } from "react-router-dom";

function Header({ textSize = "text-8xl" }) {
  return (
    <div>
      <h1
        className={`${textSize} font-bold text-center text-blue-600 mb-4 font-flowers underline underline-offset-8 decoration-4 decoration-solid`}
      >
        <Link to="/" className="cursor-pointer inline-block">
          Recipe Finder
        </Link>
      </h1>
    </div>
  );
}

export default Header;
