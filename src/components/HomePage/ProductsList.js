import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/product/actions";
import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";

const selectProducts = (reduxState) => {
  return {
    products: reduxState.products.list,
  };
};

export default function ProductsList() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const products = useSelector(selectProducts);
  const { rows, count } = products.products;

  useEffect(() => {
    dispatch(fetchProducts(pageNumber));
  }, []);

  const nextPage = () => {
    if (count > pageNumber * 10) {
      dispatch(fetchProducts(pageNumber + 1));
      setPageNumber(pageNumber + 1);
    }
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      dispatch(fetchProducts(pageNumber - 1));
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <div>
      {rows && count ? (
        <div>
          <div className="product-list">
            {rows &&
              rows.map((product, index) => (
                <Link to={`/product/${product.id}`} key={index}>
                  <p>{product.name}</p>
                </Link>
              ))}
          </div>
          <button onClick={(e) => prevPage()}>prev</button>
          <b>{pageNumber}</b>
          <button onClick={(e) => nextPage()}>next</button>
          <br />
          Found one more plastic-free product?
          <button onClick={(e) => setToggle(!toggle)}>Add it!</button>
          {toggle && <AddProductFormContainer />}
        </div>
      ) : (
        <div>
          No products here. Found one? Add it! <AddProductFormContainer />
        </div>
      )}
    </div>
  );
}
