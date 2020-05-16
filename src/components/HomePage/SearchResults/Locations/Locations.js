import React from 'react';
import Map from './Map/Map';
import AddLocation from './AddLocationForm/AddLocation';

export default function Locations({ product }) {
  return (
    <div>
      {product && product.Location && product.Location.length > 0 && (
        <Map locations={product.Location} />
      )}
      {product && <AddLocation product={product} />}
    </div>
  );
}
