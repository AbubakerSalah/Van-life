import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Component/Button/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function VansDetail() {
  const params = useParams();
  const [van, setVans] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
   ( async(() => {
    try {
      const res = await fetch(`/api/vans/${params.id}`)
      if (!res.ok) throw new Error("Filed to fetch vans");
        const data = await res.json();
      setVans(data.vans || [])
    } catch(err) {
      setErr(err.message || "Something went wrong");
    } finally{
      setloading(false)
    }
      
    }))
    
  }, [params.id]);

  const typeStyles = (type) => {
    const t = (type || "").toLowerCase();
    if (t === "simple") return "bg-[#E17654] text-[#FFEAD0]";
    if (t === "rugged") return "bg-[#115E59] text-[#FFEAD0]";
    if (t === "luxury") return "bg-[#161616] text-[#FFEAD0]";
    return "bg-gray-800 text-white";
  };
  if (err) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <p className="text-red-600 font-medium">Error: {error}</p>
      </div>
    );
  }

  if (loading) {
    return <div>Looooooooooooool</div>;
  }
  const vansDetailsEl = van ? (
    <div className="max-w-3xl m-auto mb-34">
      <Link to="/van">
        <div className="flex items-center mb-6 underline">
          <span className="text-[#858585] mt-1 cursor-pointer">
            <FaArrowLeftLong />
          </span>

          <Button className="font-semibold text-[#161616] cursor-pointer">
            Back to all vans
          </Button>
        </div>
      </Link>

      <img
        src={van.imageUrl}
        alt={van.name ? `${van.name} van` : "Van"}
        loading="lazy"
        className="aspect-[4/3] w-full rounded-md object-cover"
      />
      <div className="space-y-4">
        <div
          className={`mt-12 inline-flex items-center rounded-md px-3 py-1 font-medium capitalize
          ${typeStyles(van.type)}`}
        >
          <p>{van.type}</p>
        </div>

        <div className="min-w-0">
          <h3 className="text-3xl font-semibold truncate"> {van.name}</h3>
        </div>

        <div>
          <p className="text-xl font-bold leading-none">
            ${van.price} <span className="text-lg text-[#161616]">/day</span>
          </p>
        </div>
        <div>
          <p className="my-4">{van.description}</p>
          <Button className="bg-[#FF8C38] text-white w-full py-3 font-bold rounded cursor-pointer">
            Rent this van
          </Button>
        </div>
      </div>
    </div>
  ) : (
    (<h1>loading</h1>)()
  );

  return <div>{vansDetailsEl}</div>;
}
