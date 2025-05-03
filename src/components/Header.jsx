import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1 className="text-7xl font-bold text-center text-blue-600 mb-4 font-dancing underline underline-offset-8 decoration-2 decoration-solid">
        <Link to='/' className="cursor-pointer inline-block">
          Recipe Finder
        </Link>
      </h1>
    </div>
  );
}

export default Header;
