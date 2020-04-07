import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchProductInput(props) {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") {
      dispatch(props.fetchProducts(1));
    } else {
      dispatch(props.findProduct(keyword));
      setKeyword("");
    }
  };

  return (
    <div>
      <h1>What product are you looking for?</h1>
      <form onSubmit={onSubmit}>
        <input
          className="search-product-input"
          type="text"
          name="keyword"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
      </form>
    </div>
  );
}
