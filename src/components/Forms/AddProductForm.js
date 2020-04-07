import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/product/actions";

export default function AddProductFormContainer() {
  const dispatch = useDispatch();
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
  );
}
