import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  likeOnlineStore,
  dislikeOnlineStore,
} from '../../../../store/online_store/actions';
import OnlineStoreInfo from './OnlineStoreInfo';

const selectUser = (reduxState) => {
  return reduxState.session.user;
};

export default function OnlineStoresList({ product }) {
  const onlineStores = product.OnlineStore;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const allLikedStores = user && user.OnlineStore;
  const allStoresId = onlineStores && onlineStores.map((s) => s.id);
  const allLikedStoresId = allLikedStores && allLikedStores.map((s) => s.id);
  let likedStoresId =
    allLikedStoresId &&
    allLikedStoresId.filter((liked) => allStoresId.includes(liked));

  const setLike = (id) => {
    console.log(user.id, id);
    if (likedStoresId && likedStoresId.includes(id)) {
      dispatch(dislikeOnlineStore(user.id, id));
    } else {
      dispatch(likeOnlineStore(user.id, id));
    }
  };

  return (
    <ul>
      {onlineStores.map((store, i) => (
        <OnlineStoreInfo
          key={i}
          store={store}
          setLike={setLike}
          likedStoresId={likedStoresId}
        />
      ))}
    </ul>
  );
}
