import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStores } from "../../store/store/actions";
import { fetchProducts } from "../../store/product/actions";

import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";
import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";
import Search from "./Search";

class HomePageContainer extends Component {
  componentDidMount() {
    // console.log("props", this.props);
    this.props.fetchStores();
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <Search />

        {/* <h2>all stores</h2>
        {this.props.stores &&
          this.props.stores.map((store, index) => (
            <p key={index}>{store.name}</p>
          ))} */}
        <h2>all products</h2>
        {this.props.products &&
          this.props.products.map((product, index) => (
            <p key={index}>{product.name}</p>
          ))}
        <AddStoreFormContainer />
        <AddProductFormContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    stores: state.stores,
    products: state.products,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, {
  fetchStores,
  fetchProducts
})(HomePageContainer);
