import React from "react";
import AddOnlineStore from "./AddOnlineStore";
import OnlineStoresList from "./OnlineStoresList";

export default function OnlineStores({ product, dataNotFound }) {
  return (
    <div>
      {product && product.OnlineStore && product.OnlineStore.length > 0 && (
        <OnlineStoresList product={product} />
      )}
      {(product || dataNotFound.product) && (
        <AddOnlineStore product={product} dataNotFound={dataNotFound} />
      )}
    </div>
  );
}
