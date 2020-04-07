import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import { usePosition } from "./UserLocation";

export default function Map({ stores, fetchStores }) {
  const dispatch = useDispatch();
  const [zoom, setZoom] = useState(10);
  const [selectedMarker, setMarker] = useState(null);
  const [userLocation, setUserLocation] = useState({
    latitude: 52.370216,
    longitude: 4.895168,
  });

  useEffect(() => {
    // getLocation();
    dispatch(fetchStores());
  }, []);

  const onMarkerClustererClick = (markerClusterer) => {
    markerClusterer.getMarkers();
  };

  const setSelectedMarker = (store) => {
    setMarker(store);
    setZoom(18);
    setUserLocation({
      latitude: store.coordinate_lat,
      longitude: store.coordinate_lng,
    });
  };

  const { latitude, longitude, error } = usePosition();

  const Map = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={{
        lat: userLocation.latitude ? Number(userLocation.latitude) : 52.370216,
        lng: userLocation.longitude ? Number(userLocation.longitude) : 4.895168,
      }}
    >
      <MarkerClusterer
        onClick={onMarkerClustererClick}
        averageCenter
        gridSize={50}
        styles={[
          {
            url: "/3.svg",
            height: 30,
            width: 30,
            fontFamily: "Lato",
            textSize: 20,
            textColor: "black",
            backgroundPosition: "-120 -80",
          },
        ]}
      >
        {stores.map((store, index) => (
          <Marker
            key={index}
            position={{
              lat: Number(store.coordinate_lat),
              lng: Number(store.coordinate_lng),
            }}
            onClick={() => setSelectedMarker(store)}
            // icon={{
            //   url: `3.png`
            // }}
          ></Marker>
        ))}
      </MarkerClusterer>
      {selectedMarker && (
        <InfoWindow
          // disableAutoPan={false}
          // onCloseClick={() => setMarker(null)}
          position={{
            lat: Number(selectedMarker.coordinate_lat),
            lng: Number(selectedMarker.coordinate_lng),
          }}
        >
          <div>
            <b>{selectedMarker.name}</b>
            {/* <br />
            {selectedMarker.Product.map((product, index) => (
              <p key={index}>{product.name}</p>
            ))} */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ));
  return (
    // <div style={{ width: "100vw", height: "100vh" }}>
    <div style={{ width: "100%", height: "100%" }}>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      error: {error}
      <Map
        googleMapURL={`
          https://maps.googleapis.com/maps/api/js?v=weekly&key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ width: `500px`, height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
