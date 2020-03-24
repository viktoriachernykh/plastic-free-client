import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";

export default function ProductsList(props) {
  // const [toggle, setToggle] = useState(false);
  const productsFetched = props.products && props.products.length > 0;

  return (
    <div>
      {productsFetched ? (
        <div className="product-list">
          {/* {toggle && <AddProductFormContainer />} */}
          {props.products.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index}>
              <p>{product.name}</p>
            </Link>
          ))}
          <button onClick={props.prevPage}>prev</button>
          <b>{props.pageNumber}</b>
          <button onClick={props.nextPage}>next</button>
          {/* <br />
          Found one more plastic-free product?
          <button onClick={e => setToggle(!toggle)}>Add it!</button> */}
        </div>
      ) : (
        <div>
          No products here. Found one? Add it! <AddProductFormContainer />
        </div>
      )}
    </div>
  );
}
