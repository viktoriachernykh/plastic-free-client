import React from "react";
import StoresList from "./StoresList";
import Map from "../Map/MapContainer";

export default function HomePage({ product }) {
  return (
    <div>
      <StoresList stores={product.Store} />
      <Map />
    </div>
  );
}
