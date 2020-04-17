import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchStore } from "../store/store/actions";

const selectStore = (reduxState) => {
  return reduxState.stores.single;
};

export default function StorePageContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchStore(id));
  }, []);

  const store = useSelector(selectStore);
  const products = store && store.Product;

  return (
    <div>
      {store && (
        <div>
          <p>name: {store.name}</p>
          <p>address: {store.address}</p>
          {products &&
            products.map((product, index) => (
              <Link to={`/product/${product.id}`} key={index}>
                <p>{product.name}</p>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
