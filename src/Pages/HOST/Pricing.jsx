import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const { currentVan } = useOutletContext();

  const currentVanEl = currentVan.map((van) => (
    <div key={van.id}>
      <div className="font-bold mb-6">
        ${van.price}.00 <span className="font-normal">/day</span>
      </div>
    </div>
  ));
  return (
    <>
      <div>
        {currentVanEl}
      </div>
    </>
  );
}
