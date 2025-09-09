import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Dashbord() {
  const params = useParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/host/vans");
        if (!res.ok) throw new Error("Filed to fetch vans detail");
        const data = await res.json();
        setVans(data.vans);
      } catch (err) {
        setErr(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const hostVansElement = vans.map((van) => (
    <div key={van.id} className="bg-white flex items-center gap-3 p-5 my-4 rounded-md">
      <div>
        <img
          className="w-18 rounded-md"
          src={van.imageUrl}
          alt="host vans details"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-xl">{van.name}</h2>
        <p className="text-[#4D4D4D]">
          ${van.price}
          <span>/day</span>{" "}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <div>
        <div className="bg-[#FFEAD0] px-12 py-8 mt-4 space-y-4">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p className="text-[#4D4D4D]">
            Income last{" "}
            <span className="underline font-semibold ">30 days</span>{" "}
          </p>
          <h2 className="font-extrabold text-5xl">$2,260</h2>
        </div>
        <div className="bg-[#FFDDB2] px-12 py-10">
          <h3 className="text-2xl font-semibold">Review score 5.0<span className="text-[#4D4D4D] font-light ">/5</span></h3>
        </div>
        <div className="px-12">
          <h4 className="text-3xl my-10 font-semibold">Your listed vans</h4>
          <div>{hostVansElement}</div>
        </div>
      </div>
    </>
  );
}
