import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../Component/Button/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return (
      <div className="px-12">
        <Link to=".." relative="path">
          <div className="flex items-center mb-6 underline">
            <span className="text-[#858585] mt-1 cursor-pointer">
              <FaArrowLeftLong />
            </span>

            <Button className="font-normal text-[#161616] cursor-pointer">
              Back to all vans
            </Button>
          </div>
        </Link>

        <div className="p-8  bg-[#fff]">
          <div className=" flex items-center gap-3 mb-4">
            <div className="w-40 h-35 bg-cover bg-gray-100" />
            <div className=" flex flex-col ">
              <div className="mt-2 h-8 w-16 rounded bg-gray-100" />
              <div className="mt-2 h-8 w-46 rounded bg-gray-100" />
              <div className="mt-2 h-8 w-16 rounded bg-gray-100" />
            </div>
          </div>
          <div className=" flex gap-4">
            <div className="mt-2 h-8 w-16 rounded bg-gray-100" />
            <div className="mt-2 h-8 w-16 rounded bg-gray-100" />
            <div className="mt-2 h-8 w-16 rounded bg-gray-100" />
          </div>
          <div className="space-y-4">
            <div className="mt-2 h-6 w-36 rounded bg-gray-100" />
            <div className="mt-2 h-6 w-36 rounded bg-gray-100" />
            <div className="mt-2 h-6 w-36 rounded bg-gray-100" />
            <div className="mt-2 h-18 md:w-160 rounded bg-gray-100" />
          </div>
        </div>
      </div>
    );
  }

  const typeStyles = (type) => {
    const t = (type || "").toLowerCase();
    if (t === "simple") return "bg-[#E17654] text-[#FFEAD0]";
    if (t === "rugged") return "bg-[#115E59] text-[#FFEAD0]";
    if (t === "luxury") return "bg-[#161616] text-[#FFEAD0]";
    return "bg-gray-800 text-white";
  };

  const currentVanEl = currentVan.map((van) => (
    <div key={van.id}>
      <div className="flex flex-row items-center gap-3">
        <div>
          <img className="w-40 bg-cover" src={van.imageUrl} />
        </div>
        <div>
          <p
            className={` inline-flex items-center rounded-md px-2 py-1 font-medium capitalize
          ${typeStyles(van.type)}`}
          >
            {van.type}
          </p>
          <h2 className="text-2xl font-bold my-3">{van.name}</h2>
          <p className="text-lg font-semibold leading-none">
            ${van.price}{" "}
            <span className="text-sm font-normal text-[#161616]">/day</span>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="px-10">
      <Link to=".." relative="path">
        <div className="flex items-center mb-6 underline">
          <span className="text-[#858585] mt-1 cursor-pointer">
            <FaArrowLeftLong />
          </span>

          <Button className="font-normal text-[#161616] cursor-pointer">
            Back to all vans
          </Button>
        </div>
      </Link>
      <div className="p-8 mb-10 bg-[#fff]">
        <div>{currentVanEl}</div>
        <div className="flex gap-8 py-8 text-xl text-[#4D4D4D] ">
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive
                ? "text-[#161616] font-semibold underline transition-colors duration-200"
                : null
            }
            end
          >
            {" "}
            Detail
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive
                ? "text-[#161616] font-semibold underline transition-colors duration-200"
                : null
            }
          >
            {" "}
            Price
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive
                ? "text-[#161616] font-semibold underline transition-colors duration-200"
                : null
            }
          >
            {" "}
            Photos
          </NavLink>
        </div>
        <Outlet context={{ currentVan }} />
      </div>
    </div>
  );
}
