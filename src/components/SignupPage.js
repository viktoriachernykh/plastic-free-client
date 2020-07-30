import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../store/user/actions';
import LoginPage from './LoginPage';

export default function SignupForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password));
    setToggle(true);
  };

  const onNameChange = (value) => {
    setName(value);
    !value
      ? setError([...error, { name: 'empty name' }])
      : value.match('^[A-Za-z]+$')
      ? setError(error.filter((e) => !e.name))
      : setError([...error, { name: 'invalid symbols' }]);
  };

  const onEmailChange = (value) => {
    setEmail(value);
    !value
      ? setError([...error, { email: 'empty email' }])
      : value.indexOf('@') !== -1 &&
        value.indexOf(' ') === -1 &&
        value.match('^[A-Za-z0-9@.]+$')
      ? setError(error.filter((e) => !e.email))
      : setError([...error, { email: 'invalid email address' }]);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
    !value
      ? setError([...error, { password: 'empty password' }])
      : value.length < 6
      ? setError([...error, { password: 'too short password' }])
      : setError(error.filter((e) => !e.password));
  };

  return (
    <div className='signup'>
      <h1>Sign up</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={(e) => onNameChange(e.target.value)}
          value={name}
        />
        <br />
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={(e) => onEmailChange(e.target.value)}
          value={email}
        />
        <br />
        <input
          type='text'
          name='password'
          placeholder='password'
          onChange={(e) => onPasswordChange(e.target.value)}
          value={password}
        />
        <br />
        <div className='validation-list'>
          <ul>
            <li
              className={
                !name || error.find((e) => e.name) ? 'invalid' : 'valid'
              }
            >
              name: only letters
            </li>
            <li
              className={
                !email || error.find((e) => e.email) ? 'invalid' : 'valid'
              }
            >
              email: @, no spaces
            </li>
            <li
              className={
                !password || error.find((e) => e.password) ? 'invalid' : 'valid'
              }
            >
              password: at least 6 characters
            </li>
          </ul>
        </div>
        <br />
        {name && email && password && !error.length && (
          <button type='submit'>Sign up</button>
        )}
      </form>
      {(!name || !email || !password || error.length > 0) && (
        <button>Sign up</button>
      )}
      {name && email && password && !error.length && toggle && (
        <div>
          <h2>You signed up!</h2>
          <LoginPage />
        </div>
      )}
    </div>
  );
}
