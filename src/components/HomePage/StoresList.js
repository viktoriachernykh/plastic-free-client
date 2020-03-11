import React from "react";
import { Link } from "react-router-dom";
import SearchStoreInput from "./SearchStoreInput";

export default function StoresList(props) {
  const storesFetched = props.stores && props.stores.length > 0;

  return (
    <div>
      {storesFetched && (
        <div>
          <SearchStoreInput />
          <h2>all stores</h2>
          {props.stores.map((store, index) => (
            <Link to={`/store/${store.id}`} key={index}>
              <p>{store.name}</p>
            </Link>
          ))}
        </div>
      )}
      {/* <button onClick={props.prevPage}>prev</button>
      <b>{props.pageNumber}</b>
      <button onClick={props.nextPage}>next</button> */}
    </div>
  );
}
