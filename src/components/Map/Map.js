import React from "react";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";

export default class Map extends React.Component {
  render() {
    const { stores } = this.props;

    const WrappedMap = withGoogleMap(() => (
      <GoogleMap
        defaultZoom={12}
        // defaultZoom={this.state.markers.length > 0 ? 15 : 10}
        defaultCenter={{ lat: 52.370216, lng: 4.895168 }}
        // this.state.markers.length > 0
        //   ? this.state.markers[this.state.markers.length - 1].lat
        //   : 52.370216,
        // this.state.markers.length > 0
        //   ? this.state.markers[this.state.markers.length - 1].lng
        //   : 4.895168
        // }}
      >
        {stores.map((marker, index) => (
          <Marker
            key={index}
            position={{
              lat: Number(marker.coordinate_lat),
              lng: Number(marker.coordinate_lng)
            }}
          ></Marker>
        ))}
      </GoogleMap>
    ));
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
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
