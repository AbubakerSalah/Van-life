import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="flex justify-start gap-8 p-12 text-[#4D4D4D]">
        <Link className=" hover:underline hover:text-[#000]" to="/host">Dashbord</Link>
        <Link className=" hover:underline hover:text-[#000]"  to="/host/income">Income</Link>
        <Link className=" hover:underline hover:text-[#000]"  to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}
