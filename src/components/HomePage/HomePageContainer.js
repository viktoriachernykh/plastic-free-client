import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchStores } from "../../store/store/actions";
import { fetchProducts, findProduct } from "../../store/product/actions";
import SearchProductInput from "./SearchProductInput";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import AddProductForm from "../Forms/AddProductForm";
import Map from "../Map/MapContainer";

const selectProducts = (reduxState) => {
  return reduxState.products.list;
};

const selectStores = (reduxState) => {
  return reduxState.stores.list;
};

const selectUser = (reduxState) => {
  return reduxState.session.user;
};

export default function HomePageContainer() {
  const products = useSelector(selectProducts);
  const user = useSelector(selectUser);
  const stores = useSelector(selectStores);

  return (
    <div>
      <SearchProductInput
        fetchProducts={fetchProducts}
        findProduct={findProduct}
        products={products}
      />
      <div className="container">
        <ProductsList products={products} />
        <Pagination products={products} fetchProducts={fetchProducts} />
        <AddProductForm />
        <Map stores={stores} fetchStores={fetchStores} />
      </div>
    </div>
  );
}
