import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostVansDetailsLayout () {
      return (
            <>
              <nav className="flex justify-start gap-8 px-12 pb-8 text-[#4D4D4D]">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4D4D4D] underline transition-colors duration-200"
                      : null
                  }
                  to={`/hostVan/:${id}`}
                  end
                >
                  Detail
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4D4D4D] underline transition-colors duration-200"
                      : null
                  }
                  to="pricing"
                >
                  Price
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4D4D4D] underline transition-colors duration-200"
                      : null
                  }
                  to="photo"
                >
                  Photo
                </NavLink>
                
              </nav>
              <Outlet />
            </>
          );
}