import React, { useState, useEffect } from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";
import { usePosition } from "./UserLocation";
import MarkerClusterers from "./MarkerClusterer";

export default function Map({ stores, fetchStores }) {
  const [zoom, setZoom] = useState(10);
  const [userLocation, setUserLocation] = useState({
    latitude: 52.370216,
    longitude: 4.895168,
  });

  const { latitude, longitude, error } = usePosition();

  const Map = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={{
        lat: userLocation.latitude ? Number(userLocation.latitude) : 52.370216,
        lng: userLocation.longitude ? Number(userLocation.longitude) : 4.895168,
      }}
    >
      <MarkerClusterers />
    </GoogleMap>
  ));
  return (
    // <div style={{ width: "100vw", height: "100vh" }}>
    //   latitude: {latitude}
    //   <br />
    //   longitude: {longitude}
    //   <br />
    //   error: {error}
    <Map
      googleMapURL={`
          https://maps.googleapis.com/maps/api/js?v=weekly&key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ width: `500px`, height: `500px` }} />}
      mapElement={<div style={{ width: `500px`, height: `500px` }} />}
    />
    // </div>
  );
}
