import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Pohotos() {

      const { currentVan } = useOutletContext();

  const currentVanEl = currentVan.map((van) => (
    <div key={van.id}>
      <div className="font-bold mb-6">
        <img className="w-25" src={van.imageUrl} alt="" />
      </div>
    </div>
  ));
      return(
            <div>{currentVanEl}</div>
      )
}