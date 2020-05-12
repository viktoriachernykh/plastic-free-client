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
  const theproduct = product ? product : dataNotFound.product;

  return (
    <div>
      <div>
        <p>found plastic-free {theproduct.name} somewhere else?</p>
        {token ? (
          <div>
            <button onClick={(e) => setToggle(!toggle)}>add location</button>
            {toggle && (
              <AddLocationForm
                product={theproduct}
                dataNotFound={dataNotFound}
              />
            )}
          </div>
        ) : (
          <div>
            <Link to='/login'>Log in</Link> to add location
          </div>
        )}
      </div>
    </div>
  );
}
