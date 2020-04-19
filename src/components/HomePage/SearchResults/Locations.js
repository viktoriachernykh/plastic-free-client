import React from "react";
// import StoresList from "./StoresList";
import Map from "../../Map/Map";
import AddProductForm from "./AddProductForm";

export default function Locations({ product, dataNotFound }) {
  console.log("render");

  return (
    <div>
      {product && (
        <div className="container">
          <Map />
          {/* <StoresList stores={product.Store} /> */}
        </div>
      )}
      <AddProductForm dataNotFound={dataNotFound} />
    </div>
  );
}
