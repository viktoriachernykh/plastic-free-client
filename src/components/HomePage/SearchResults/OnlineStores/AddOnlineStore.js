import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddOnlineStoreForm from './AddOnlineStoreForm';

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function AddOnlineStore({ product }) {
  const token = useSelector(selectToken);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {product && product.OnlineStore && product.OnlineStore.length > 0 ? (
        <p>found another online store with plastic-free {product.name}?</p>
      ) : (
        <p>no online stores with plastic-free {product.name}. found one?</p>
      )}
      {token ? (
        <div>
          <button onClick={(e) => setToggle(!toggle)}>add online store</button>
          {toggle && <AddOnlineStoreForm product={product} />}
        </div>
      ) : (
        <div>
          <Link to='/login'>Log in</Link> to add online store
        </div>
      )}
    </div>
  );
}
