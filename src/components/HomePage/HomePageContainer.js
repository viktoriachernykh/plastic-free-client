import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findProduct, renewPage } from "../../store/product/actions";
import SearchProductInput from "./SearchProductInput";
import AddProductForm from "./AddProductForm";
import HomePage from "./HomePage";

const selectProducts = (reduxState) => {
  return reduxState.products.single;
};

export default function HomePageContainer() {
  const product = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(renewPage());
  }, []);

  return (
    <div>
      <SearchProductInput findProduct={findProduct} />
      {product ? <HomePage product={product} /> : <AddProductForm />}
    </div>
  );
}
