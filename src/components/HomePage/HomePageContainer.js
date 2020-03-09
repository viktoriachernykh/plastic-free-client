import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStores } from "../../store/store/actions";
import { fetchProducts } from "../../store/product/actions";

import SearchProductInput from "./SearchProductInput";
import HomePage from "./HomePage";
// import Map from "../Map/Map";
// import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";
import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchStores();
    this.props.fetchProducts();
  }

  render() {
    const dataFetched =
      this.props.products &&
      this.props.products.length > 0 &&
      this.props.stores &&
      this.props.stores.length > 0;

    return (
      <div>
        <SearchProductInput />
        {dataFetched && (
          <HomePage stores={this.props.stores} products={this.props.products} />
        )}
        {/* <AddStoreFormContainer /> */}
        <AddProductFormContainer />
        {/* <Map /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("homepage rendering", state);
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
