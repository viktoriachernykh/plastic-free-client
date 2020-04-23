import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Marker, InfoWindow } from "react-google-maps";
import {
  likeLocation,
  dislikeLocation,
} from "../../../../../store/location/actions";
import LocationInfo from "./LocationInfo";

const selectUser = (reduxState) => {
  return reduxState.session.user;
};

export default function Markers({ locations }) {
  const [selectedMarker, setMarker] = useState(null);
  const dispatch = useDispatch();

  const setSelectedMarker = (location) => {
    setMarker(location);
  };

  const user = useSelector(selectUser);
  const allLikedLocations = user && user.Location;

  const allLocId = locations && locations.map((l) => l.id);
  const likedLocId = allLikedLocations && allLikedLocations.map((l) => l.id);
  let likedLocationsId =
    likedLocId && likedLocId.filter((liked) => allLocId.includes(liked));
  // const liked = allLikedLocations.filter((loc) =>
  //   likedLocationsId.includes(loc.id)
  // );
  // console.log("liked", liked);

  const setLike = (id) => {
    console.log(user.id, id);
    if (likedLocationsId && likedLocationsId.includes(id)) {
      dispatch(dislikeLocation(user.id, id));
    } else {
      dispatch(likeLocation(user.id, id));
    }
  };

  return (
    <div>
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{
            lat: Number(location.coordinate_lat),
            lng: Number(location.coordinate_lng),
          }}
          onClick={(e) => setSelectedMarker(location)}
          // icon={{
          //   url: `3.png`,
          // }}
        ></Marker>
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: Number(selectedMarker.coordinate_lat),
            lng: Number(selectedMarker.coordinate_lng),
          }}
          onCloseClick={(e) => setMarker(null)}
        >
          <LocationInfo
            location={selectedMarker}
            setLike={setLike}
            likedLocationsId={likedLocationsId}
          />
        </InfoWindow>
      )}
    </div>
  );
}
