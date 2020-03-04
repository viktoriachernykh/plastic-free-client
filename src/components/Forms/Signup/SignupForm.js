import React from "react";

export default function SignupForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        name:
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={props.onChange}
          value={props.values.name}
        />
        <br />
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
