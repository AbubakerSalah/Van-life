import React from "react";
import Button from "../Component/Button/Button";

export default function About() {
  return (
    <div className="max-w-7xl m-auto">
      <div>
        <img
          className="w-full h-[388px] object-cover"
          src="./public/about.png"
          alt="A travel van parked in nature"
        />
      </div>
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
        <Button className="bg-[#161616] text-white py-3 px-6 mt-6 rounded-lg">
          Explore our vans
        </Button>
      </section>
    </div>
  );
}
