import React from "react";

export default function OnlineStoresList({ product }) {
  const onlineStores = product.OnlineStore;
  return (
    <div>
      {onlineStores.map((store, i) => (
        <p key={i}>{store.link}</p>
      ))}
    </div>
  );
}
