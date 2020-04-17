import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../store/user/actions";

export default function SignupForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password));
  };

  return (
    <div className="signup">
      <h1>Sign up</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
