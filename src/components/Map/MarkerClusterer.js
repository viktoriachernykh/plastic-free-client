import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Marker, InfoWindow } from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import { fetchStores } from "../../store/store/actions";

const selectStores = (reduxState) => {
  return reduxState.stores.list;
};

export default function MarkerClusterers() {
  // const dispatch = useDispatch();
  const stores = useSelector(selectStores);
  console.log("stores?", stores);

  const [zoom, setZoom] = useState(10);
  const [userLocation, setUserLocation] = useState({
    latitude: 52.370216,
    longitude: 4.895168,
  });
  const [selectedMarker, setMarker] = useState(null);

  useEffect(() => {
    fetchStores();
    // dispatch(fetchStores());
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

  return (
    <div>
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
    </div>
  );
}
