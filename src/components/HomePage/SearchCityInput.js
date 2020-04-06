import React, { Component } from "react";
import { connect } from "react-redux";
import { findProduct, fetchProducts } from "../../store/product/actions";

class SearchCityInput extends Component {
  state = { keyword: "" };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.keyword === "") {
      this.props.fetchProducts(1);
    } else {
      this.props.findProduct(this.state.keyword);
    }
  };

  onChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            <h1>What product are you looking for?</h1>
            <br />
            <input
              className="search-product-input"
              type="text"
              name="keyword"
              onChange={this.onChange}
              value={this.state.keyword}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default connect(null, {})(SearchCityInput);
