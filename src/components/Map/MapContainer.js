import React, { useState } from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";
import { usePosition } from "./UserLocation";
import Markers from "./Markers";

export default function Map() {
  const { latitude, longitude, error } = usePosition();

  const Map = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{
        lat: latitude ? Number(latitude) : 52.370216,
        lng: longitude ? Number(longitude) : 4.895168,
      }}
    >
      <Markers />
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
