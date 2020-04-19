import React from "react";
// import StoresList from "./StoresList";
import Map from "./Map/Map";
import AddLocationForm from "./AddLocationForm/AddLocationForm";

export default function Locations({ product, dataNotFound }) {
  console.log("render");

  return (
    <div>
      {product && (
        <div className="container">
          <Map />
          {/* <LocationsList stores={product.Store} /> */}
        </div>
      )}
      {/* <AddLocationForm product={product} dataNotFound={dataNotFound} /> */}
    </div>
  );
}
