import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { renewPage } from '../store/product/actions';
import { cleanSearch } from '../store/search/actions';

const selectUser = (reduxState) => {
  return reduxState.session.user;
};
const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function Header() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const renew = (e) => {
    dispatch(renewPage());
    dispatch(cleanSearch());
  };

  return (
    <div className='Header'>
      <Link to={'/'}>
        <span onClick={(e) => renew()}>Home</span>
      </Link>
      |
      {token ? (
        <>
          <Link to='/logout'>Log out</Link>|
          <Link to={`/user/${user.id}`}>Saved</Link>
        </>
      ) : (
        <>
          <Link to='/login'>Log in</Link>|<Link to='/signup'>Sign up</Link>
        </>
      )}
    </div>
  );
}
