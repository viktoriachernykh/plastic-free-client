import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import { Link } from "react-router-dom";

export default function Markers({ locations }) {
  const [selectedMarker, setMarker] = useState(null);

  const setSelectedMarker = (location) => {
    setMarker(location);
  };

  return (
    <div>
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{
            lat: Number(location.coordinate_lat),
            lng: Number(location.coordinate_lng),
          }}
          onClick={(e) => setSelectedMarker(location)}
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
            <Link to={`/location/${selectedMarker.id}`}>
              <b>{selectedMarker.name}</b>
            </Link>
          </div>
        </InfoWindow>
      )}
    </div>
  );
}
