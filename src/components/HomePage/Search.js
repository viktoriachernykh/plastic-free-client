import React, { Component } from "react";
import { connect } from "react-redux";
import { findProduct } from "../../store/product/actions";

class Search extends Component {
  state = { keyword: "" };

  onSubmit = event => {
    event.preventDefault();
    // console.log("this.state.keyword", this.state.keyword); // returns keyword from input
    this.props.findProduct(this.state.keyword);
    this.setState({
      keyword: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            What product are you looking for?
            <br />
            <input
              type="text"
              name="keyword"
              onChange={this.onChange}
              value={this.state.keyword}
            />
          </label>
          <br />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { findProduct })(Search);
