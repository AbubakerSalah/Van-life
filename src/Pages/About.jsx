import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mt-8">
      <div>
      <img
        src="../about.webp"
        alt="Scenic travel background for the home page"
        width={1920}
        height={180}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="block w-full sm:h-[500px] object-cover"
      />
      </div>
      <div className="max-w-7xl m-auto">
        <section className="p-12">
          <h1 className="text-4xl font-bold">
            Don't squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-lg">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </section>
        <section className="p-10 m-12 bg-[#FFCC8D] rounded">
          <h2 className="text-3xl font-bold">
            Your destination is waiting. Your van is ready.
          </h2>
          <div className="py-8 mt-">
          <Link to="../van" className="bg-[#161616] text-white py-4 px-6  rounded-lg">
            Explore our vans
          </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
