import React from "react";

export default function AddProductForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        name:
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={props.onChange}
          value={props.values.name}
        />
        <br />
        price:
        <input
          type="number"
          name="price"
          placeholder="price"
          onChange={props.onChange}
          value={props.values.price}
        />
        <br />
        <button type="submit">Add product</button>
      </form>
    </div>
  );
}
