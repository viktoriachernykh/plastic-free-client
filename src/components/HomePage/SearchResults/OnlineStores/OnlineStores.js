import React from 'react';
import OnlineStoresList from './OnlineStoresList';
import AddOnlineStore from './AddOnlineStore';

export default function OnlineStores({ product }) {
  return (
    <div>
      {product && product.OnlineStore && product.OnlineStore.length > 0 && (
        <OnlineStoresList product={product} />
      )}
      {product && <AddOnlineStore product={product} />}
    </div>
  );
}
