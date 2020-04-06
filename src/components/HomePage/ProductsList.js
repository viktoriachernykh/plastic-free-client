import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";

export default function ProductsList(props) {
  // const [toggle, setToggle] = useState(false);

  return (
    <div>
      {props.products.rows && props.products.count ? (
        <div>
          <div className="product-list">
            {props.products.rows &&
              props.products.rows.map((product, index) => (
                <Link to={`/product/${product.id}`} key={index}>
                  <p>{product.name}</p>
                </Link>
              ))}
          </div>
          {/* Found one more plastic-free product?
          <button onClick={(e) => setToggle(!toggle)}>Add it!</button>
          {toggle && <AddProductFormContainer />} */}
        </div>
      ) : (
        <div>
          No products here. Found one? Add it! <AddProductFormContainer />
        </div>
      )}
    </div>
  );
}
