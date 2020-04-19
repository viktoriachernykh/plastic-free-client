import React from "react";
import { Link } from "react-router-dom";
// import SearchStoreInput from "./SearchStoreInput";

export default function StoresList({ stores }) {
  return (
    <div className="storelist">
      <div>
        {/* <SearchStoreInput /> */}
        {stores.map((store, index) => (
          <Link to={`/store/${store.id}`} key={index}>
            <div className="store" key={index}>
              <h3>{store.name}</h3>
              <p>{store.address}</p>
              <hr />
            </div>
          </Link>
        ))}
      </div>
      {/* <button onClick={props.prevPage}>prev</button>
      <b>{props.pageNumber}</b>
      <button onClick={props.nextPage}>next</button> */}
    </div>
  );
}
