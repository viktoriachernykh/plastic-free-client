import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findCity } from "../../store/city/actions";
import { findProducts } from "../../store/product/actions";
import { renewPage } from "../../store/city/actions";

const selectCities = (reduxState) => {
  return reduxState.cities;
};

const selectProducts = (reduxState) => {
  console.log("reduxState", reduxState);

  return reduxState.products.list;
};

export default function SearchProductInput({ findProductByCity }) {
  const dispatch = useDispatch();

  const cities = useSelector(selectCities);
  const products = useSelector(selectProducts);

  const [product, setProduct] = useState("");
  const [city, setCity] = useState("");
  const [citySuggestions, showCitySuggestions] = useState(true);
  const [productSuggestions, showProductSuggestions] = useState(true);

  useEffect(() => {
    dispatch(renewPage());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (product === "" || city === "") {
      window.alert("fill both fields");
    } else {
      dispatch(findProductByCity(product, city));
    }
  };

  const onProductChange = (key) => {
    setProduct(key);
    key.length > 1 && dispatch(findProducts(key));
  };

  const onCityChange = (key) => {
    setCity(key);
    key.length > 2 && dispatch(findCity(key));
  };

  const chooseProduct = (product) => {
    showProductSuggestions(false);
    setProduct(product);
  };

  const chooseCity = (city) => {
    showCitySuggestions(false);
    setCity(city);
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
                  onClick={(e) => chooseProduct(product.name)}
                >
                  {product.name}
                </li>
              );
            })}
        </ul>
        <ul>
          {citySuggestions &&
            cities &&
            cities.map((city, i) => {
              return (
                <li
                  className="suggestion"
                  key={i}
                  onClick={(e) => chooseCity(city.name)}
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
