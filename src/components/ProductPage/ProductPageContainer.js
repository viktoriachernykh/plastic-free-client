import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { fetchProduct } from "../../store/product/actions";
import { addStore } from "../../store/store/actions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import SearchPlaceInput from "./SearchPlaceInput";

const selectProduct = (reduxState) => {
  return reduxState.products.single;
};

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function ProductPageContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector(selectToken);
  const product = useSelector(selectProduct);
  const stores = product && product.Store;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  const addNewStore = async (address) => {
    const productId = id;
    const results = await geocodeByAddress(address);
    const city = results[0].address_components.filter(
      (addr) =>
        (addr.types.includes("political") && addr.types.includes("locality")) ||
        (addr.types.includes("political") &&
          addr.types.includes("administrative_area_level_2"))
    )[0].long_name;
    const country = results[0].address_components.filter(
      (addr) =>
        addr.types.includes("political") && addr.types.includes("country")
    )[0].long_name;
    const latLng = await getLatLng(results[0]);
    const newStore = {
      name: address,
      address: results[0].formatted_address,
      city: city,
      country: country,
      google_place_id: results[0].place_id,
      coordinate_lat: latLng.lat,
      coordinate_lng: latLng.lng,
    };
    dispatch(addStore(newStore, productId));
  };

  return (
    <div>
      {product ? (
        <div>
          We have <b>{stores.length}</b> stores with plastic-free{" "}
          <b>{product.name}</b> product
          {token && (
            <p>
              Found one more store with plastic-free <b>{product.name}</b>?
              <button onClick={(e) => setToggle(!toggle)}>Add it</button>
            </p>
          )}
          {toggle && <SearchPlaceInput addStore={addNewStore} />}
          {stores.map((store, index) => (
            <Link to={`/store/${store.id}`} key={index}>
              <p>{store.name}</p>
            </Link>
          ))}
        </div>
      ) : (
        <SearchPlaceInput addStore={addNewStore} />
      )}
    </div>
  );
}
