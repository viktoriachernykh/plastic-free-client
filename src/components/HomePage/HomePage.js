import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findProductByCity, renewPage } from "../../store/product/actions";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults/SearchResults";

const selectProducts = (reduxState) => {
  return reduxState.products.single;
};
const selectDataNotFound = (reduxState) => {
  return reduxState.products.dataNotFound;
};

export default function HomePageContainer() {
  const product = useSelector(selectProducts);
  const dataNotFound = useSelector(selectDataNotFound);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renewPage());
  }, []);

  return (
    <div>
      <SearchInput
        findProductByCity={findProductByCity}
        dataNotFound={dataNotFound}
      />
      {(product || dataNotFound) && (
        <SearchResults product={product} dataNotFound={dataNotFound} />
      )}
    </div>
  );
}