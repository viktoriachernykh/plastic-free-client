import React from "react";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import {
  MarkerClusterer
  // MarkerWithLabel
} from "react-google-maps/lib/components/addons/MarkerClusterer";

export default class Map extends React.Component {
  state = {
    userLocation: []
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCoordinates);
    }
  };
  //  else {
  //     console.log('Geolocation is not supported');
  //   }
  // };

  setCoordinates = position => {
    console.log("position", position);
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    this.setState({
      latitude,
      longitude
    });
  };

  onMarkerClustererClick = markerClusterer => {
    const clickedMarkers = markerClusterer.getMarkers();
    console.log(`Current clicked markers length: ${clickedMarkers.length}`);
    console.log(clickedMarkers);
  };

  render() {
    const { stores } = this.props;
    const { latitude, longitude } = this.state;
    const Map = withGoogleMap(() => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: Number(latitude),
          lng: Number(longitude)
        }}
        // this.state.markers.length > 0
        //   ? this.state.markers[this.state.markers.length - 1].lat
        //   : 52.370216,
        // this.state.markers.length > 0
        //   ? this.state.markers[this.state.markers.length - 1].lng
        //   : 4.895168
        // }}
      >
        <MarkerClusterer
          onClick={this.onMarkerClustererClick}
          averageCenter
          enableRetinaIcons
          gridSize={20}
        >
          {stores.map((store, index) => (
            <Marker
              key={index}
              position={{
                lat: Number(store.coordinate_lat),
                lng: Number(store.coordinate_lng)
              }}
            ></Marker>
          ))}
        </MarkerClusterer>
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
