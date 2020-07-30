import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../store/user/actions';

const selectUser = (reduxState) => {
  return reduxState.session.jwt;
};

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);

  const token = useSelector(selectUser);

  const onSubmit = (e) => {
    e.preventDefault();
    setToggle(true);
    dispatch(login(email, password));
  };

  return (
    <div className='login'>
      <h1>Log in</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <input
          type='text'
          name='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type='submit'>Log in</button>
      </form>
      {toggle && token && (
        <h2>
          You logged in!{' '}
          <Link to='/' className='active-link'>
            Go to Search
          </Link>
        </h2>
      )}
      {toggle && !token && (
        <p>
          User not found, try{' '}
          <Link to='/signup' className='active-link'>
            Sign up
          </Link>{' '}
          first
        </p>
      )}
    </div>
  );
}
