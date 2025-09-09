import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div
      className="relative min-h-[400px] text-white max-w-7xl m-auto px-[23px] py-[45px] 
        bg-[linear-gradient(0deg,rgba(0,0,0,0.46),rgba(0,0,0,0.46)),url('../public/home.png')]
        bg-no-repeat bg-center bg-cover "
    >
      <div className="flex flex-col gap-3 mt-8 items-center">
        <h1 className="text-5xl font-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-lg my-10">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Link
          to="/van"
          className="bg-[#FF8C38] text-center w-full py-3  font-bold rounded cursor-pointer"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
}
