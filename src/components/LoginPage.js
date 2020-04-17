import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/user/actions";

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        email:
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        password:
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
