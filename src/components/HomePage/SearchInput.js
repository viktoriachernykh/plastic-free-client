import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findCities } from '../../store/city/actions';
import { findProducts } from '../../store/product/actions';
import Categories from './Categories';
import { setSearchProduct, setSearchCity } from '../../store/search/actions';

const selectCities = (reduxState) => {
  return reduxState.cities;
};
const selectProducts = (reduxState) => {
  return reduxState.products.list;
};
const selectNoProduct = (reduxState) => {
  return reduxState.products.noSuchProduct;
};

export default function SearchProductInput({
  findProductByCity,
  theproduct,
  productSearchValue,
  citySearchValue,
}) {
  const [product, setProduct] = useState('');
  const [city, setCity] = useState('');

  const cities = useSelector(selectCities);
  const products = useSelector(selectProducts);
  const noProduct = useSelector(selectNoProduct);

  const [citySuggestions, showCitySuggestions] = useState(false);
  const [productSuggestions, showProductSuggestions] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    showCitySuggestions(false);
    showProductSuggestions(false);

    if ((!product && !productSearchValue) || (!city && !citySearchValue)) {
      window.alert('fill both fields');
    } else {
      const selectedProduct = theproduct
        ? theproduct
        : products.find((p) => p.name === product);

      dispatch(setSearchCity(city ? city : citySearchValue));
      dispatch(setSearchProduct(selectedProduct));

      const theProductId = selectedProduct
        ? selectedProduct.id
        : productSearchValue.id;
      const theCity = city ? city : citySearchValue;
      dispatch(findProductByCity(theProductId, theCity));

      setCity('');
      setProduct('');
    }
  };

  const onProductChange = (key) => {
    setProduct(key);
    showCitySuggestions(false);
    key.length > 0
      ? showProductSuggestions(true)
      : showProductSuggestions(false);
    key.length > 1 && dispatch(findProducts(key));
  };

  const onCityChange = (key) => {
    setCity(key);
    showProductSuggestions(false);
    key.length > 0 ? showCitySuggestions(true) : showCitySuggestions(false);
    key.length > 1 && dispatch(findCities(key));
  };

  const chooseProduct = (product) => {
    showProductSuggestions(false);
    setProduct(product.name);
  };

  const chooseCity = (city) => {
    showCitySuggestions(false);
    setCity(city.name);
  };

  return (
    <div>
      <h1 className='full-h1'>All plastic-free products in your city</h1>
      <h1 className='short-h1'>All plastic-free products</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='product'
          placeholder={
            productSearchValue && productSearchValue.name
              ? productSearchValue.name
              : 'choose product'
          }
          onChange={(e) => onProductChange(e.target.value)}
          value={product}
        />
        <input
          type='text'
          name='city'
          placeholder={citySearchValue ? citySearchValue : 'choose city'}
          onChange={(e) => onCityChange(e.target.value)}
          value={city}
        />
        <button className='SearchButton' type='submit'>
          Search
        </button>
        <ul>
          {productSuggestions &&
            products &&
            products.map((product, i) => {
              return (
                <li
                  className='suggestion'
                  key={i}
                  onClick={(e) => chooseProduct(product)}
                >
                  {product.name}
                </li>
              );
            })}
          {noProduct && noProduct.keyword && <li>no such product</li>}
        </ul>
        <ul>
          {citySuggestions &&
            cities &&
            cities.map((city, i) => {
              return (
                <li
                  className='suggestion'
                  key={i}
                  onClick={(e) => chooseCity(city)}
                >
                  {city.name}
                </li>
              );
            })}
        </ul>
      </form>
      {!productSearchValue.length && !citySearchValue && (
        <Categories chooseProduct={chooseProduct} />
      )}
    </div>
  );
}
