import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/product/actions";
import AddProductForm from "./AddProductForm";

export default function AddProductFormContainer() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name: name,
    };
    dispatch(addProduct(newProduct));
    setName("");
  };

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <AddProductForm onSubmit={onSubmit} onChange={onChange} values={name} />
    </div>
  );
}
