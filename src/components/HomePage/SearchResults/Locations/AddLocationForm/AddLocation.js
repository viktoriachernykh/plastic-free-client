import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddLocationForm from "./AddLocationForm.js";

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function AddLocation({ product, dataNotFound }) {
  const token = useSelector(selectToken);

  return (
    <div>
      {dataNotFound ? (
        <p>
          no plastic-free {dataNotFound.keyword} in {dataNotFound.city}. found
          one?
        </p>
      ) : (
        <p>found one more location with plastic-free {product.name}?</p>
      )}
      {token ? (
        <div>
          <AddLocationForm product={product} dataNotFound={dataNotFound} />
        </div>
      ) : (
        <div>
          <Link to="/login">Log in</Link> to add it
        </div>
      )}
    </div>
  );
}
