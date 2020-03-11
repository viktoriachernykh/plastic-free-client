import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";
import SearchProductInput from "./SearchProductInput";

export default function ProductsList(props) {
  const [toggle, setToggle] = useState(false);
  const productsFetched = props.products && props.products.length > 0;

  return (
    <div>
      <h2>products list</h2>
      {productsFetched ? (
        <div>
          <SearchProductInput />
          Found one more plastic-free product?
          <button onClick={e => setToggle(!toggle)}>Add it!</button>
          {toggle && <AddProductFormContainer />}
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
          No products here. Found one? Add it! <AddProductFormContainer />
        </div>
      )}
    </div>
  );
}
