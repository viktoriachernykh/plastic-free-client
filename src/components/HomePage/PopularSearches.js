import React from 'react';
import { useDispatch } from 'react-redux';

export default function PopularSearches({ findProductByCity }) {
  const dispatch = useDispatch();

  // const find = (e) => {
  //   const productId = 5;
  //   const city = 'Paris';
  //   dispatch(findProductByCity(productId, city));
  // };
  const find = (e) => {
    const productId = 2;
    const city = 'Amsterdam';
    dispatch(findProductByCity(2, 'Amsterdam'));
  };
  // const find2 = (e) => {
  //   const productId = 4;
  //   const city = 'Roma';
  //   dispatch(findProductByCity(productId, city));
  // };

  return (
    <div className='PopularSearches'>
      <h1>Popular searches</h1>
      <ul>
        {/* <li onClick={(e) => find()}>Croissant in Paris</li> */}
        <li onClick={(e) => find()}>Cheese in Amsterdam</li>
        {/* <li onClick={(e) => find2()}>Pasta in Rome</li> */}
      </ul>
    </div>
  );
}
