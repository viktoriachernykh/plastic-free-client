import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOnlineStore } from "../../../../store/online_store/actions";

export default function AddOnlineStore({ product, dataNotFound }) {
  const dispatch = useDispatch();
  const [link, setLink] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (product) {
      dispatch(addOnlineStore(link, product.id));
    } else {
      dispatch(addOnlineStore(link, dataNotFound.product.id));
    }
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="link"
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
        <button type="submit">Add store</button>
      </form>
    </div>
  );
}
