import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStore } from "../../../../../store/store/actions";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import SearchPlacesInput from "./SearchPlacesInput";

export default function SearchPlaceInput({ product, dataNotFound }) {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);
    setLocation(address);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    product && console.log("onSubmit product.id", location, product.id); // product.id 1
    dataNotFound &&
      console.log("onSubmit dataNotFound", location, dataNotFound); // {keyword: "111", city: "111"}
    addLocation(location);
    setAddress("");
    setLocation("");
  };

  // const addStore = (location) => {
  //   console.log("addStore log", location);

  // product ? addStore(location, product.id) : addProductAndStore(location, dataNotFound)

  const addLocation = async (address) => {
    // const productId = id;
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
    console.log("newStore", newStore);
    if (product) {
      dispatch(addStore(newStore, product.id));
    } else {
      console.log(dataNotFound.keyword);

      // dispatch(addStoreAndProduct(newStore, dataNotFound.keyword));
    }
  };

  return (
    <div>
      add it:
      <form onSubmit={(e) => onSubmit(e)}>
        <SearchPlacesInput
          address={address}
          handleChange={handleChange}
          handleSelect={handleSelect}
        />
        <button type="submit">Add location</button>
      </form>
    </div>
  );
}
