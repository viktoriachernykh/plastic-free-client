import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import { Link } from "react-router-dom";

export default function Markers({ stores }) {
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
            <Link to={`/store/${selectedMarker.id}`}>
              <b>{selectedMarker.name}</b>
            </Link>
          </div>
        </InfoWindow>
      )}
    </div>
  );
}
