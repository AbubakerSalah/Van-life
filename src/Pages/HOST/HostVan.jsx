import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VanDashbord() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return vans ? (
      <div className="px-12">
        <h1 className="text-3xl font-semibold">Your listed vans</h1>
        {[...Array(vans.length || 3)].map((_, i) => (
          <div
            key={i}
            className="bg-white flex items-center gap-3 p-6 my-10 rounded-md"
          >
            <div className="flex flex-row gap-3">
              <div className="bg-gray-100 w-18 h-14 rounded-md"></div>
              <div className="flex flex-col mt-3 gap-2">
                <div className="bg-gray-100 w-28 h-6"></div>
                <div className="bg-gray-100 w-16 h-6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      ""
    );
  }

  const hostVansElement = vans.map((van) => (
    <Link to={van.id} key={van.id}>
      <div className="bg-white flex items-center gap-3 p-5 my-4 rounded-md">
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
    </Link>
  ));
  return (
    <>
      <div className="px-12">
        <h1 className="text-3xl font-semibold">Your listed vans</h1>
        <div className="my-10">{hostVansElement}</div>
      </div>
    </>
  );
}
