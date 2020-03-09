import React from "react";

export default class AddProductForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={event => this.props.onSubmit(event)}>
          name:
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.props.onChange}
            value={this.props.values.name}
          />
          <br />
          <button type="submit">Add product</button>
        </form>
      </div>
    );
  }
}
