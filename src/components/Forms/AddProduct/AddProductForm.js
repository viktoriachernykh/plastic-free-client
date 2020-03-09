import React from "react";

export default class AddProductForm extends React.Component {
  // state = {
  //   addStore: false
  // };
  // handleClick = () => {
  //   this.setState({
  //     addStore: true
  //   });
  // };

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
          price:
          <input
            type="number"
            name="price"
            placeholder="price"
            onChange={this.props.onChange}
            value={this.props.values.price}
          />
          <br />
          in what stores can you find it?
          <br />
          add store:
          <input
            type="text"
            name="store1"
            placeholder="store1"
            onChange={this.props.onChange}
            value={this.props.values.store1}
          />
          <br />
          {/* <button onClick={this.handleClick}>+ store</button>
          <br /> */}
          {/* {this.state.addStore && ( */}
          {/* add store:
          <input
            type="text"
            name="store2"
            placeholder="store2"
            onChange={this.props.onChange}
            value={this.props.values.store2}
          />
          <br />
          add store:
          <input
            type="text"
            name="store3"
            placeholder="store3"
            onChange={this.props.onChange}
            value={this.props.values.store3}
          />
          <br /> */}
          <button type="submit">Add product</button>
        </form>
      </div>
    );
  }
}
