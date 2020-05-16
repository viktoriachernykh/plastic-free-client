import React from 'react';
import { useSelector } from 'react-redux';
import { findProductByCity } from '../../store/product/actions';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults/SearchResults';
// import PopularSearches from './PopularSearches';

const selectProducts = (reduxState) => {
  return reduxState.products.single;
};
const selectDataNotFound = (reduxState) => {
  return reduxState.products.dataNotFound;
};
const selectSearchProduct = (reduxState) => {
  return reduxState.search.product;
};
const selectSearchCity = (reduxState) => {
  return reduxState.search.city;
};

export default function HomePageContainer() {
  const product = useSelector(selectProducts);
  const dataNotFound = useSelector(selectDataNotFound);
  const theproduct = product ? product : dataNotFound && dataNotFound.product;

  const productSearchValue = useSelector(selectSearchProduct);
  const citySearchValue = useSelector(selectSearchCity);

  return (
    <div>
      <SearchInput
        findProductByCity={findProductByCity}
        theproduct={theproduct}
        productSearchValue={productSearchValue}
        citySearchValue={citySearchValue}
      />
      {productSearchValue && citySearchValue && (
        <SearchResults product={theproduct} />
      )}
      {/* <PopularSearches findProductByCity={findProductByCity} /> */}
    </div>
  );
}
