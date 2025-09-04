import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) return <div>Loading..</div>;

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

  return <div className="pl-12">{currentVanEl}</div>;
}
