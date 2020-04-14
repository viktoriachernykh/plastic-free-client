import React from "react";
import { useSelector } from "react-redux";
import { fetchProducts, findProduct } from "../../store/product/actions";
import SearchProductInput from "./SearchProductInput";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import AddProductForm from "../Forms/AddProductForm";

const selectProducts = (reduxState) => {
  return reduxState.products.list;
};

export default function HomePage() {
  const products = useSelector(selectProducts);

  return (
    <div>
      <SearchProductInput
        // fetchProducts={fetchProducts}
        findProduct={findProduct}
        products={products}
      />
      <div className="container">
        <ProductsList products={products} />
        <Pagination products={products} fetchProducts={fetchProducts} />
        <AddProductForm />
      </div>
    </div>
  );
}
