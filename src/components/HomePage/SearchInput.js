import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findCity } from "../../store/city/actions";
import { findProducts } from "../../store/product/actions";
import { renewPage } from "../../store/city/actions";

const selectCities = (reduxState) => {
  console.log("reduxState", reduxState);
  return reduxState.cities;
};
const selectProducts = (reduxState) => {
  return reduxState.products.list;
};

export default function SearchProductInput({
  findProductByCity,
  dataNotFound,
}) {
  const dispatch = useDispatch();

  const cities = useSelector(selectCities);
  const products = useSelector(selectProducts);

  const [product, setProduct] = useState("");
  const [city, setCity] = useState("");

  const [citySuggestions, showCitySuggestions] = useState(false);
  const [productSuggestions, showProductSuggestions] = useState(false);

  useEffect(() => {
    dispatch(renewPage());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    showCitySuggestions(false);
    showProductSuggestions(false);
    if (product === "" || city === "") {
      window.alert("fill both fields");
    } else {
      const selectedProduct =
        products && products.find((p) => p.name === product);

      console.log("selectedProduct and city", selectedProduct, city);
      selectedProduct && dispatch(findProductByCity(selectedProduct, city));
    }
  };

  const onProductChange = (key) => {
    console.log("key product", key);
    console.log("product", product);

    setProduct(key);
    showCitySuggestions(false);
    key.length > 0
      ? showProductSuggestions(true)
      : showProductSuggestions(false);
    key.length > 1 && dispatch(findProducts(key));
  };

  const onCityChange = (key) => {
    console.log("key city", key);
    console.log("city", city);

    setCity(key);
    showProductSuggestions(false);
    key.length > 0 ? showCitySuggestions(true) : showCitySuggestions(false);
    key.length > 1 && dispatch(findCity(key));
  };

  const chooseProduct = (product) => {
    showProductSuggestions(false);
    setProduct(product.name);
  };

  const chooseCity = (city) => {
    showCitySuggestions(false);
    setCity(city.name);
  };

  return (
    <div>
      <h1>All plastic-free products in your city</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="product"
          onChange={(e) => onProductChange(e.target.value)}
          value={product}
        />
        <input
          type="text"
          name="city"
          onChange={(e) => onCityChange(e.target.value)}
          value={city}
        />
        <button className="search" type="submit">
          Search
        </button>
        <ul>
          {productSuggestions &&
            products &&
            products.map((product, i) => {
              return (
                <li
                  className="suggestion"
                  key={i}
                  onClick={(e) => chooseProduct(product)}
                >
                  {product.name}
                </li>
              );
            })}
          {dataNotFound && dataNotFound.keyword && <li>no such product</li>}
        </ul>
        <ul>
          {citySuggestions &&
            cities &&
            cities.map((city, i) => {
              return (
                <li
                  className="suggestion"
                  key={i}
                  onClick={(e) => chooseCity(city)}
                >
                  {city.name}
                </li>
              );
            })}
        </ul>
      </form>
    </div>
  );
}
