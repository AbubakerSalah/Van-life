import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative text-white mt-8">
      <img
        src="../home.webp"
        alt="Scenic travel background for the home page"
        width={1920}
        height={1080}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="block w-full h-[100svh] object-cover"
      />

      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 w-full max-w-5xl text-center">
        <h1 className="text-5xl font-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-lg my-10">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <div className="flex justify-center">
          <Link
            to="/van"
            className="bg-[#FF8C38] text-center py-3 px-6 font-bold rounded cursor-pointer w-full max-w-xl"
          >
            Find your van
          </Link>
        </div>
      </div>
    </div>
  );
}
