import React from "react";
import { useSelector } from "react-redux";
import { findProduct } from "../../store/product/actions";
import SearchProductInput from "./SearchProductInput";
import AddProductForm from "./AddProductForm";
import HomePage from "./HomePage";

const selectProducts = (reduxState) => {
  return reduxState.products.single;
};

export default function HomePageContainer() {
  const product = useSelector(selectProducts);

  return (
    <div>
      <SearchProductInput findProduct={findProduct} />
      {product ? <HomePage product={product} /> : <AddProductForm />}
    </div>
  );
}
