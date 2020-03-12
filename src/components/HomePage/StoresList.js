import React from "react";
import { Link } from "react-router-dom";
import SearchStoreInput from "./SearchStoreInput";

export default function StoresList(props) {
  const storesFetched = props.stores && props.stores.length > 0;

  return (
    <div>
      <h2>stores list</h2>
      {storesFetched ? (
        <div>
          <SearchStoreInput />
          {props.stores.map((store, index) => (
            <Link to={`/store/${store.id}`} key={index}>
              <p>
                {store.name}({store.Product.length} products)
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div>No stores added. Go to product to add stores.</div>
      )}
      {/* <button onClick={props.prevPage}>prev</button>
      <b>{props.pageNumber}</b>
      <button onClick={props.nextPage}>next</button> */}
    </div>
  );
}
