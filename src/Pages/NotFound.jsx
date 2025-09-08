import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex justify-center text-center">
      <div className="flex flex-col justify-evenly items-center gap-12 mt-10 px-10">
        <h1 className="text-2xl sm:text-4xl font-extrabold">
          Sorry, the page you were looking for was not found.
        </h1>
        <Link 
        to="/"
        className="bg-black text-[#ffff] text-xl w-full py-6  ">Return to home</Link>
      </div>
      
    </div>
  );
}
