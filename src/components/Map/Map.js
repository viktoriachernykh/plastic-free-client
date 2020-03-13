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
    userLocation: [],
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
      latitude,
      longitude
    });
  };

  onMarkerClustererClick = markerClusterer => {
    const clickedMarkers = markerClusterer.getMarkers();
    // console.log(`Current clicked markers length: ${clickedMarkers.length}`);
  };

  setSelectedMarker = store => {
    console.log("selectedMarker store", store);

    this.setState({
      selectedMarker: store
    });
  };

  render() {
    const { stores } = this.props;
    const { latitude, longitude } = this.state;

    const Map = withGoogleMap(() => (
      <GoogleMap
        defaultZoom={12}
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
              onClick={() => this.setSelectedMarker(store)}
              // icon={{
              //   url: `3.png`
              // }}
            ></Marker>
          ))}
        </MarkerClusterer>
        {this.state.selectedMarker && (
          <InfoWindow
            onCloseClick={() => {
              this.state.selectedMarker(null);
            }}
            position={{
              lat: Number(this.state.selectedMarker.coordinate_lat),
              lng: Number(this.state.selectedMarker.coordinate_lng)
            }}
          >
            <div>
              <b>{this.state.selectedMarker.name}</b>
              <br />
              {this.state.selectedMarker.Product.map(product => (
                <>product.name</>
              ))}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    ));
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        {latitude && longitude ? (
          <Map
            googleMapURL={`
          https://maps.googleapis.com/maps/api/js?v=weekly&key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{ margin: `auto`, width: `800px`, height: `600px` }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        ) : (
          "Loading map..."
        )}
      </div>
    );
  }
}
