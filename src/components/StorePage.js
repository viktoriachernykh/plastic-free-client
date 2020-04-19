import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
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
          <div>
            products:
            {products &&
              products.map((product, i) => <p key={i}>{product.name},</p>)}
          </div>
        </div>
      )}
    </div>
  );
}
