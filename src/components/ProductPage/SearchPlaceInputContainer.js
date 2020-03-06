import React from "react";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import SearchPlaceInput from "./SearchPlaceInput";

export default class Search extends React.Component {
  state = {
    // markers: []
  };

  addStore = async address => {
    // console.log("address in Map", address);
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    const newLocation = {
      placeId: results[0].place_id,
      address: results[0].formatted_address,
      lat: latLng.lat,
      lng: latLng.lng
    };
    console.log("results", results);
    console.log("newLocation", newLocation);
    // this.setState({
    //   markers: [...this.state.markers, newLocation]
    // });
  };

  render() {
    return (
      <div>
        <SearchPlaceInput addStore={this.addStore} />
      </div>
    );
  }
}
