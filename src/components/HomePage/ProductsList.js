import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";

export default function ProductsList(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2>all products</h2>
      Found one more plastic-free product?
      <button onClick={e => setToggle(!toggle)}>Add it!</button>
      {toggle && <AddProductFormContainer />}
      {props.products.length >= 1 ? (
        <div>
          {props.products.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index}>
              <p>{product.name}</p>
            </Link>
          ))}
          <button onClick={props.prevPage}>prev</button>
          <b>{props.pageNumber}</b>
          <button onClick={props.nextPage}>next</button>
        </div>
      ) : (
        <div>
          Product not found, you can add it
          <AddProductFormContainer />
        </div>
      )}
    </div>
  );
}
