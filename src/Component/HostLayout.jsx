import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="flex justify-start gap-8 px-12 pb-8 text-[#4D4D4D]">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#4D4D4D] underline transition-colors duration-200"
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
              ? "text-[#4D4D4D] underline transition-colors duration-200"
              : null
          }
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#4D4D4D] underline transition-colors duration-200"
              : null
          }
          to="/host/HostVan"
        >
          Van
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#4D4D4D] underline transition-colors duration-200"
              : null
          }
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
