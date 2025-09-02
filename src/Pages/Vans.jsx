import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

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

  const typeStyles = (type) => {
    const t = (type || "").toLowerCase();
    if (t === "simple") return "bg-[#E17654] text-[#FFEAD0]";
    if (t === "rugged") return "bg-[#115E59] text-[#FFEAD0]";
    if (t === "luxury") return "bg-[#161616] text-[#FFEAD0]";
    return "bg-gray-800 text-white";
  };

  //loding backgound items.
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center py-6">
          Explore our van options
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl p-2 animate-pulse">
              <div className="aspect-[4/3] w-full rounded-xl bg-gray-100" />
              <div className="mt-4 h-5 w-1/2 rounded bg-gray-100" />
              <div className="mt-2 h-8 w-24 rounded bg-gray-100" />
              <div className="mt-4 h-5 w-20 rounded bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
    );
  }
 
  const vanElements = vans.map((van) => (
    <article key={van.id}>
      <Link to={`/van/${van.id}`}>
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

  if (err) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <p className="text-red-600 font-medium">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <h1 className="text-3xl font-bold text-center py-6">
        Explore our van options
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vanElements}
      </div>
    </div>
  );
}
