import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex justify-between m-auto max-w-7xl p-12 text-[#000]">
        <Link className="font-extrabold text-4xl" to="/">
          {" "}
          #VANLIFE
        </Link>
        <nav className=" text-3xl space-x-8">
          <Link
            className="text-[#4D4D4D] hover:underline hover:text-[#000] transition-colors duration-200"
            to="/about"
          >
            {" "}
            About
          </Link>
          <Link
            className="text-[#4D4D4D] hover:underline hover:text-[#000] transition-colors duration-200"
            to="/van"
          >
            Vans
          </Link>
        </nav>
      </header>
    </>
  );
}
