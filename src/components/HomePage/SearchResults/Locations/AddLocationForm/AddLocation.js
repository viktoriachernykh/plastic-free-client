import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddLocationForm from './AddLocationForm.js';

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function AddLocation({ product }) {
  const token = useSelector(selectToken);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div>
        {product.Location && product.Location.length > 0 ? (
          <p>found new location with plastic-free {product.name}?</p>
        ) : (
          <p>found location with plastic-free {product.name}?</p>
        )}
        {token ? (
          <div>
            <button onClick={(e) => setToggle(!toggle)}>add location</button>
            {toggle && <AddLocationForm product={product} />}
          </div>
        ) : (
          <div>
            <Link to='/login'>
              <b className='active-link'>Log in</b>
            </Link>{' '}
            to add location
          </div>
        )}
      </div>
    </div>
  );
}
