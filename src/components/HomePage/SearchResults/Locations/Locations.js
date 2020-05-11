import React from 'react';
import Map from './Map/Map';
import AddLocation from './AddLocationForm/AddLocation';

export default function Locations({ product, dataNotFound }) {
  return (
    <div>
      {product && product.Location && product.Location.length > 0 && (
        <Map product={product} />
      )}
      {(product || dataNotFound.product) && (
        <AddLocation product={product} dataNotFound={dataNotFound} />
      )}
    </div>
  );
}
