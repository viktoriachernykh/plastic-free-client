import React from "react";

export default function AddEventForm(props) {
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
        address:
        <input
          type="text"
          name="address"
          placeholder="address"
          onChange={props.onChange}
          value={props.values.address}
        />
        <br />
        opening_hours:
        <input
          type="text"
          name="opening_hours"
          placeholder="opening_hours"
          onChange={props.onChange}
          value={props.values.opening_hours}
        />
        <br />
        <button type="submit">Add store</button>
      </form>
    </div>
  );
}
