import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../store/product/actions";

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

const selectDataNotFound = (reduxState) => {
  return reduxState.products.dataNotFound;
};

export default function AddProductFormContainer() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const dataNotFound = useSelector(selectDataNotFound);
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: name,
    };
    dispatch(addProduct(newProduct));
    setName("");
  };

  return (
    <div>
      {dataNotFound && (
        <div>
          no plastic-free {dataNotFound.keyword} in {dataNotFound.city}
          {token ? (
            <div>
              <p>found one? add it:</p>
              <form onSubmit={(e) => onSubmit(e)}>
                name:
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <br />
                <button type="submit">Add product</button>
              </form>
            </div>
          ) : (
            <div>
              <p>found one?</p>
              <Link to="/login">Log in</Link> to add it
            </div>
          )}
        </div>
      )}
    </div>
  );
}
