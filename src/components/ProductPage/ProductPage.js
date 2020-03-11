import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchPlaceInput from "./SearchPlaceInput";

export default function ProductPage(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {props.product && (
        <div>
          {props.stores ? (
            <div>
              We have <b>{props.stores.length}</b> stores with plastic-free{" "}
              <b>{props.product.name}</b> product
              {props.token && (
                <p>
                  Found one more store with plastic-free{" "}
                  <b>{props.product.name}</b>?
                  <button onClick={e => setToggle(!toggle)}>Add it</button>
                </p>
              )}
              {toggle && <SearchPlaceInput addStore={props.addStore} />}
              {props.stores.map((store, index) => (
                <Link to={`/store/${store.id}`} key={index}>
                  <p>{store.name}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div>
              <p>
                We don't have stores with plastic-free{" "}
                <b>{props.product.name}</b> product
              </p>
              {props.token && (
                <p>
                  If you found one, add it!
                  <button onClick={e => setToggle(!toggle)}>Add it</button>
                </p>
              )}
              {toggle && <SearchPlaceInput addStore={props.addStore} />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
