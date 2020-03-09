import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
    <div>
      <h2>all products</h2>
      {props.products.map((product, index) => (
        <Link to={`/product/${product.id}`} key={index}>
          <p>{product.name}</p>
        </Link>
      ))}
      <br />
      <h2>all stores</h2>
      {props.stores.map((store, index) => (
        <Link to={`/store/${store.id}`} key={index}>
          <p>{store.name}</p>
        </Link>
      ))}
    </div>
  );
}
