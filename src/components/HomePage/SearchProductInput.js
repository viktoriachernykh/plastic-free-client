import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchProductInput(props) {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "" || city === "") {
      window.alert("fill both fields!");
      // dispatch(props.fetchProducts(1));
    } else {
      dispatch(props.findProduct(keyword, city));
      setKeyword("");
      setCity("");
    }
  };

  return (
    <div>
      <h1>What product are you looking for?</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="keyword"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <input
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
