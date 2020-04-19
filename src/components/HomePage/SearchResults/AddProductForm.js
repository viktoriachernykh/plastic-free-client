import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../../store/product/actions";

const selectToken = (reduxState) => {
  console.log("data?", reduxState);

  return reduxState.session.jwt;
};

export default function AddProductFormContainer({ dataNotFound }) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  console.log("dataNotFound", dataNotFound);

  const [name, setName] = useState("");

  // {
  // dataNotFound && setName(dataNotFound.keyword);
  // }
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
      <div>
        {dataNotFound ? (
          <p>
            no plastic-free {dataNotFound.keyword} in {dataNotFound.city}
          </p>
        ) : (
          <p> LOCATIONS HERE</p>
        )}
        {token ? (
          <div>
            found one? add it:
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
