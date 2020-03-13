import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  Marker
  // InfoWindow
} from "react-google-maps";
import {
  MarkerClusterer
  // MarkerWithLabel
} from "react-google-maps/lib/components/addons/MarkerClusterer";

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
          disableDefaultUI
          // enableRetinaIcons
          gridSize={20}
          // minimumClusterSize={50}
          styles={[
            {
              url: "/3.png",
              // size: "2 2",
              // scaledSize: "2 2",
              // imageSizes: 1,
              height: 30,
              width: 30,
              fontFamily: "Lato",
              textSize: 20,
              textColor: "white",
              // defaultImageSizes: "40 40",
              // anchor: [0, 0]
              // anchorIcon: "-10 -10",
              // maxZoom: 8
              // anchor: [6, 0],"center"
              // anchorText: [2, 2]
              backgroundPosition: "-40 -40"
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
              icon={{
                url: `1.png`
              }}
            ></Marker>
          ))}
        </MarkerClusterer>
        {/* {this.state.selectedMarker && (
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
              hey */}
        {/* <h2>{this.state.selectedMarker.properties.NAME}</h2>
            <p>{this.state.selectedMarker.properties.DESCRIPTIO}</p> */}
        {/* </div>
          </InfoWindow>
        )} */}
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
