import React from "react";
import AddOnlineStore from "./AddOnlineStore";
import OnlineStoresList from "./OnlineStoresList";

export default function OnlineStores({ product, dataNotFound }) {
  return (
    <div>
      online stores list
      {/* {product && <OnlineStoresList />} */}
      {(product || dataNotFound.product) && (
        <AddOnlineStore product={product} dataNotFound={dataNotFound} />
      )}
    </div>
  );
}
