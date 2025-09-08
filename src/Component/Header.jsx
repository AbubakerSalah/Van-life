import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex justify-between m-auto max-w-7xl px-10 my-12 text-[#000]">
        <NavLink className="font-extrabold text-4xl" to="/">
          {" "}
          #VANLIFE
        </NavLink>
        <nav className=" text-2xl space-x-8">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#4D4D4D] underline transition-colors duration-200"
                : null
            }
            to="/Host"
          >
            {" "}
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#4D4D4D] underline transition-colors duration-200"
                : null
            }
            to="/about"
          >
            {" "}
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#4D4D4D] underline transition-colors duration-200"
                : null
            }
            to="/van"
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  );
}
