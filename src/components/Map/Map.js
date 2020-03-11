import React from "react";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import SearchPlaceInput from "./SearchPlaceInput";

export default class Map extends React.Component {
  state = {
    markers: []
  };

  addStore = async address => {
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    const newLocation = {
      placeId: results[0].place_id,
      address: results[0].formatted_address,
      lat: latLng.lat,
      lng: latLng.lng
    };
    this.setState({
      markers: [...this.state.markers, newLocation]
    });
  };

  render() {
    const WrappedMap = withGoogleMap(() => (
      <GoogleMap
        defaultZoom={this.state.markers.length > 0 ? 15 : 10}
        defaultCenter={{
          lat:
            this.state.markers.length > 0
              ? this.state.markers[this.state.markers.length - 1].lat
              : 52.370216,
          lng:
            this.state.markers.length > 0
              ? this.state.markers[this.state.markers.length - 1].lng
              : 4.895168
        }}
      >
        {this.state.markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
          ></Marker>
        ))}
      </GoogleMap>
    ));
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <SearchPlaceInput addStore={this.addStore} />
        {this.state.markers.length > 0 &&
          this.state.markers.map((location, index) => (
            <p key={index}>
              {location.address}, {location.lat}, {location.lng}
            </p>
          ))}
        <WrappedMap
          googleMapURL={`
          https://maps.googleapis.com/maps/api/js?v=weekly&key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ margin: `auto`, width: `800px`, height: `600px` }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
