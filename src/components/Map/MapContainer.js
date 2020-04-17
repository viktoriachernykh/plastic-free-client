import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, withGoogleMap } from "react-google-maps";
// import { usePosition } from "./UserLocation";
import Markers from "./Markers";

const selectStores = (reduxState) => {
  return reduxState.products.single.Store;
};

export default function Map() {
  // const { latitude, longitude } = usePosition();
  const stores = useSelector(selectStores);

  const centerLAT = stores
    .map((store) => Number(store.coordinate_lat).toFixed(4))
    .reduce((sum, lat) => sum + Number(lat) / stores.length, 0);

  const centerLNG = stores
    .map((store) => Number(store.coordinate_lng).toFixed(4))
    .reduce((sum, lng) => sum + Number(lng) / stores.length, 0);

  const Map = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{
        lat: centerLAT ? Number(centerLAT) : 52.370216,
        lng: centerLNG ? Number(centerLNG) : 4.895168,
      }}
    >
      <Markers stores={stores} />
    </GoogleMap>
  ));

  return (
    <Map
      googleMapURL={`
          https://maps.googleapis.com/maps/api/js?v=weekly&key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ width: `500px`, height: `500px` }} />}
      mapElement={<div style={{ width: `500px`, height: `500px` }} />}
    />
  );
}
