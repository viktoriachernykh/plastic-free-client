import React from "react";

export default function LoginForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        email:
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={props.onChange}
          value={props.values.email}
        />
        <br />
        password:
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={props.onChange}
          value={props.values.password}
        />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
