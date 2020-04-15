import React from "react";
import { useSelector } from "react-redux";
import { fetchProducts, findProduct } from "../../store/product/actions";
import SearchProductInput from "./SearchProductInput";
// import ProductsList from "./ProductsList";
// import Pagination from "./Pagination";
// import AddProductForm from "../Forms/AddProductForm";
import StoresList from "./StoresList";
import Map from "../Map/MapContainer";

const selectProducts = (reduxState) => {
  console.log("HomePage reduxState", reduxState);
  return reduxState.products.single;
};

export default function HomePage() {
  const product = useSelector(selectProducts);

  return (
    <div>
      {product === null ? (
        <>
          <SearchProductInput findProduct={findProduct} />
          {/* <ProductsList products={products} /> */}
          {/* <Pagination products={products} fetchProducts={fetchProducts} /> */}
          {/* <AddProductForm /> */}
        </>
      ) : (
        <div className="container">
          <SearchProductInput findProduct={findProduct} />
          <StoresList stores={product.Store} />
          <Map />
        </div>
      )}
    </div>
  );
}
