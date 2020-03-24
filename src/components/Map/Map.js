import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

export default class Map extends React.Component {
  state = {
    zoom: 10,
    userLocation: { latitude: null, longitude: null },
    selectedMarker: null
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCoordinates);
    }
  };

  setCoordinates = position => {
    const { latitude, longitude } = position.coords;
    this.setState({
      userLocation: { latitude: latitude, longitude: longitude }
    });
  };

  onMarkerClustererClick = markerClusterer => {
    // const clickedMarkers =
    markerClusterer.getMarkers();
    // this.setState({
    //   zoom: 15
    // });
    // console.log(`Current clicked markers length: ${clickedMarkers.length}`);
  };

  setSelectedMarker = store => {
    // preventDefault();
    this.setState({
      // zoom: 20,
      selectedMarker: store
    });
  };

  render() {
    const { stores } = this.props;
    const { latitude, longitude } = this.state.userLocation;

    const Map = withGoogleMap(() => (
      <GoogleMap
        defaultZoom={this.state.zoom}
        defaultCenter={{
          lat: latitude ? Number(latitude) : 52.370216,
          lng: longitude ? Number(longitude) : 4.895168
        }}
      >
        <MarkerClusterer
          onClick={this.onMarkerClustererClick}
          averageCenter
          gridSize={50}
          styles={[
            {
              url: "/3.svg",
              height: 30,
              width: 30,
              fontFamily: "Lato",
              textSize: 20,
              textColor: "white",
              backgroundPosition: "-120 -80"
            }
          ]}
        >
          {stores.map((store, index) => (
            <Marker
              key={index}
              position={{
                lat: Number(store.coordinate_lat),
                lng: Number(store.coordinate_lng)
              }}
              onClick={() => {
                this.setSelectedMarker(store);
              }}
              // icon={{
              //   url: `3.png`
              // }}
            ></Marker>
          ))}
        </MarkerClusterer>
        {this.state.selectedMarker && (
          <InfoWindow
            // disableAutoPan={false}
            onCloseClick={() => {
              this.setState({
                selectedMarker: null
              });
            }}
            position={{
              lat: Number(this.state.selectedMarker.coordinate_lat),
              lng: Number(this.state.selectedMarker.coordinate_lng)
            }}
          >
            <div>
              <b>{this.state.selectedMarker.name}</b>
              <br />
              {this.state.selectedMarker.Product.map((product, index) => (
                <p key={index}>{product.name}</p>
              ))}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    ));
    return (
      // <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ width: "100%", height: "100%" }}>
        {latitude && longitude && (
          <Map
            googleMapURL={`
          https://maps.googleapis.com/maps/api/js?v=weekly&key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ width: `500px`, height: `500px` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        )}
      </div>
    );
  }
}
