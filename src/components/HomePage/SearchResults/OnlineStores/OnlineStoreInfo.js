import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function OnlineStoresList({ store, setLike, likedStoresId }) {
  const token = useSelector(selectToken);

  return (
    <li>
      <a href={`${store.link}`}>{store.link}</a>
      {/* <Link to={store.link}> {store.link}</Link> */}
      {token && (
        <b>
          {likedStoresId && likedStoresId.includes(store.id) ? (
            <img
              className='likeButton'
              src='/img/like.png'
              onClick={(e) => setLike(store.id)}
            ></img>
          ) : (
            <img
              className='dislikeButton'
              src='/img/dislike.png'
              onClick={(e) => setLike(store.id)}
            ></img>
          )}
        </b>
      )}
    </li>
  );
}
