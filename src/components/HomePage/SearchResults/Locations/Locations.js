import React from "react";
// import StoresList from "./StoresList";
import Map from "./Map/Map";
import AddLocation from "./AddLocationForm/AddLocation";

export default function Locations({ product, dataNotFound }) {
  return (
    <div>
      {product && (
        <div className="container">
          <Map />
          {/* <LocationsList stores={product.Store} /> */}
        </div>
      )}
      {(product || dataNotFound) && (
        <AddLocation product={product} dataNotFound={dataNotFound} />
      )}
    </div>
  );
}
