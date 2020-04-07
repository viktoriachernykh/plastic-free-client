import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Pagination(props) {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(props.fetchProducts(pageNumber));
  }, []);

  const nextPage = () => {
    if (props.products.count > pageNumber * 10) {
      dispatch(props.fetchProducts(pageNumber + 1));
      setPageNumber(pageNumber + 1);
    }
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      dispatch(props.fetchProducts(pageNumber - 1));
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <button onClick={(e) => prevPage()}>prev</button>
      <b>{pageNumber}</b>
      <button onClick={(e) => nextPage()}>next</button>
    </div>
  );
}
