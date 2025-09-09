import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
    <div className="max-w-7xl mx-auto mb-16 scroll-smooth">
      <nav className="flex justify-start gap-8 px-12 pb-8 text-[#4D4D4D]">
      {/*  */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#161616] underline font-semibold transition-colors duration-200"
              : null
          }
          to="/host"
          end
        >
          Dashbord
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#161616] underline font-semibold transition-colors duration-200"
              : null
          }
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#161616] underline font-semibold transition-colors duration-200"
              : null
          }
          to="HostVan"
        >
          Van
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#161616] underline font-semibold transition-colors duration-200"
              : null
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
    </>
  );
}
