import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Details() {
  const { currentVan } = useOutletContext();

  const currentVanEl = currentVan.map((van) => (
    <div key={van.id}>
      <h4 className="font-bold">
        Name: <span className="font-normal">{van.name}</span>
      </h4>
      <p className="font-bold max-w-3xl py-4">
        Category: <span className="font-normal">{van.type}</span>
      </p>
      <p className="font-semibold max-w-3xl">
        Description: <span className="font-normal">{van.description}</span>
      </p>

      <p className="font-bold py-4">
        Visibility: <span className="font-normal">Public</span>
      </p>
    </div>
  ));
  return (
    <>
      <section>{currentVanEl}</section>
    </>
  );
}
