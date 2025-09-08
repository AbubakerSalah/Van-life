import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [searchPrams, setSearchPrams] = useSearchParams();
  const filterType = searchPrams.get("type");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/vans");
        if (!res.ok) throw new Error("Filed to fetch vans");
        const data = await res.json();
        setVans(data.vans || []);
      } catch (err) {
        setErr(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const displayedVansEl = filterType
    ? vans.filter((van) => van.type.toLowerCase() === filterType)
    : vans;

  function handleFilterChange(key, value) {
    setSearchPrams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const baseBtn = "py-2 px-5 rounded";
  const idleBtn = "bg-[#FFEAD0] text-[#4D4D4D]";
  //const clearBtn = "underline text-[#4D4D4D] bg-transparent";

  const typeStyles = (type) => {
    const t = (type || "").toLowerCase();
    if (t === "simple") return "bg-[#E17654] text-[#FFEAD0]";
    if (t === "rugged") return "bg-[#115E59] text-[#FFEAD0]";
    if (t === "luxury") return "bg-[#161616] text-[#FFEAD0]";
    return idleBtn;
  };

  if (err) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <p className="text-red-600 font-medium">Error: {err}</p>
      </div>
    );
  }

  const filters = [
    { label: "Simple", type: "simple" },
    { label: "Luxury", type: "luxury" },
    { label: "Rugged", type: "rugged" },
    //{ label: "Clear filters", type: null, isClear: true },
  ];

  //loding backgound items.
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-10 mb-16 scroll-smooth">
        <h1 className="text-3xl font-bold py-8">Explore our van options</h1>
        <div className="flex items-center mb-12 gap-4">
          <div className="mt-2 h-10 w-22 rounded bg-gray-100" />
          <div className="mt-2 h-10 w-22 rounded bg-gray-100" />
          <div className="mt-2 h-10 w-22 rounded bg-gray-100" />
          <div className="mt-2 h-4 w-22 rounded bg-gray-100" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl p-2 animate-pulse">
              <div className="aspect-[4/3] w-full rounded-xl bg-gray-100" />
              <div className="flex justify-between">
                <div>
                  <div className="mt-4 h-5 w-24 rounded bg-gray-100" />
                  <div className="mt-2 h-8 w-1/2 rounded bg-gray-100" />
                </div>
                <div className="mt-4 h-10 w-10 rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const vanElements = displayedVansEl.map((van) => (
    <article key={van.id}>
      <Link to={van.id} state={{ search: `?${searchPrams.toString()}`, type: filterType}}>
        <img
          src={van.imageUrl}
          alt={van.name ? `${van.name} van` : "Van"}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-md object-cover"
        />
        <div className="mt-3 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold truncate"> {van.name}</h3>
            <span
              className={`mt-2 inline-flex items-center rounded-md px-3 py-1  font-medium capitalize
          ${typeStyles(van.type)}`}
            >
              {van.type}
            </span>
          </div>

          <div className="text-right shrink-0">
            <p className="text-xl font-bold leading-none">${van.price}</p>
            <p className="text-sm text-[#161616] mt-1">/day</p>
          </div>
        </div>
      </Link>
    </article>
  ));

  return (
    <div className="max-w-7xl mx-auto px-10 mb-16 scroll-smooth">
      <h1 className="text-3xl font-bold py-8">Explore our van options</h1>
      <div className="flex items-center gap-4 mb-12">
        {/* <button
          onClick={() => handleFilterChange("type", "simple" )}
          className="bg-[#FFEAD0] text-[#4D4D4D] py-2 px-5 rounded"
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury" )}
          className="bg-[#FFEAD0] text-[#4D4D4D] py-2 px-5 rounded"
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged" )}
          className="bg-[#FFEAD0] text-[#4D4D4D] py-2 px-5 rounded"
        >
          Rugged
        </button>
         */}

        {filters.map((filter) => {
          const isActive = filterType === filter.type;
          const classes = filter.isClear
            ? `${baseBtn} `
            : `${baseBtn} ${isActive ? typeStyles(filter.type) : idleBtn}`;
          return (
            <button
              key={filter.label}
              onClick={() => handleFilterChange("type", filter.type)}
              className={classes}
            >
              {filter.label}
            </button>
          );
        })}
        {filterType ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className=" text-[#4D4D4D]  underline"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vanElements}
      </div>
    </div>
  );
}
