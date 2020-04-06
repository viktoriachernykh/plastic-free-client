import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchProductInput(props) {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (keyword === "") {
      dispatch(props.fetchProducts(1));
    } else {
      dispatch(props.findProduct(keyword));
      setKeyword("");
    }
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <h1>What product are you looking for?</h1>
      <form onSubmit={onSubmit}>
        <input
          className="search-product-input"
          type="text"
          name="keyword"
          onChange={onChange}
          value={keyword}
        />
      </form>
    </div>
  );
}
