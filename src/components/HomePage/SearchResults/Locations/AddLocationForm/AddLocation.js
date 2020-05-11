import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddLocationForm from './AddLocationForm.js';

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function AddLocation({ product, dataNotFound }) {
  const token = useSelector(selectToken);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {dataNotFound ? (
        <p>
          no plastic-free {dataNotFound.product.name} in {dataNotFound.city}.
          found location?
        </p>
      ) : (
        <p>found plastic-free {product.name} somewhere else?</p>
      )}
      {token ? (
        <div>
          <button onClick={(e) => setToggle(!toggle)}>add location</button>
          {toggle && (
            <AddLocationForm product={product} dataNotFound={dataNotFound} />
          )}
        </div>
      ) : (
        <div>
          <Link to='/login'>Log in</Link> to add location
        </div>
      )}
    </div>
  );
}
