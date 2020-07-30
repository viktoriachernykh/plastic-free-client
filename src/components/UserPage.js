import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../store/user/actions';
import { dislikeLocation } from '../store/location/actions';
import { dislikeOnlineStore } from '../store/online_store/actions';

const selectUser = (reduxState) => {
  return reduxState.session.user;
};

export default function UserPageContainer() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    user && dispatch(fetchUser(user.id));
  }, []);

  const removeLocation = (locationId) => {
    dispatch(dislikeLocation(user.id, locationId));
  };

  const removeOnlineStore = (onlineStoreId) => {
    dispatch(dislikeOnlineStore(user.id, onlineStoreId));
  };

  return (
    <div>
      <h3>Saved Locations</h3>
      <ul>
        {user &&
          user.Location &&
          user.Location.length > 0 &&
          user.Location.map((location, i) => (
            <li key={i}>
              {location.name}, {location.address}
              <b onClick={(e) => removeLocation(location.id)}> delete</b>
            </li>
          ))}
      </ul>
      <h3>Saved Online Stores</h3>
      <ul>
        {user &&
          user.OnlineStore &&
          user.OnlineStore.length > 0 &&
          user.OnlineStore.map((store, i) => (
            <li key={i}>
              {store.link}
              <b onClick={(e) => removeOnlineStore(store.id)}> delete</b>
            </li>
          ))}
      </ul>
    </div>
  );
}
