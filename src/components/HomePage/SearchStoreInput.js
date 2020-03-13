import React, { Component } from "react";
import { connect } from "react-redux";
import { findStore, fetchStores } from "../../store/store/actions";

class SearchStoreInput extends Component {
  state = { keyword: "" };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.keyword === "") {
      this.props.fetchStores(1);
    } else {
      this.props.findStore(this.state.keyword);
    }
  };

  onChange = event => {
    this.setState({
      keyword: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            What store are you looking for?
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

export default connect(null, { findStore, fetchStores })(SearchStoreInput);
