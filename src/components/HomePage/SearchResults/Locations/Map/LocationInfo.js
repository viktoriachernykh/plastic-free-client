import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function LocationInfo({ location, setLike, likedLocationsId }) {
  const token = useSelector(selectToken);

  return (
    <div>
      <Link to={`/location/${location.id}`}>
        <b>{location.name}</b>
      </Link>
      {token && (
        <b>
          {likedLocationsId && likedLocationsId.includes(location.id) ? (
            <img
              className="likeButton"
              src="/img/like.png"
              onClick={(e) => setLike(location.id)}
            ></img>
          ) : (
            <img
              className="dislikeButton"
              src="/img/dislike.png"
              onClick={(e) => setLike(location.id)}
            ></img>
          )}
        </b>
      )}
    </div>
  );
}
