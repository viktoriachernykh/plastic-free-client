import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Marker, InfoWindow } from "react-google-maps";

const selectStores = (reduxState) => {
  return reduxState.products.single.Store;
};

export default function Markers() {
  const stores = useSelector(selectStores);
  const [selectedMarker, setMarker] = useState(null);

  const setSelectedMarker = (store) => {
    setMarker(store);
  };

  return (
    <div>
      {stores.map((store, index) => (
        <Marker
          key={index}
          position={{
            lat: Number(store.coordinate_lat),
            lng: Number(store.coordinate_lng),
          }}
          onClick={(e) => setSelectedMarker(store)}
          // icon={{
          //   url: `3.png`,
          // }}
        ></Marker>
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: Number(selectedMarker.coordinate_lat),
            lng: Number(selectedMarker.coordinate_lng),
          }}
          onCloseClick={(e) => setMarker(null)}
        >
          <div>
            <b>{selectedMarker.name}</b>
          </div>
        </InfoWindow>
      )}
    </div>
  );
}
