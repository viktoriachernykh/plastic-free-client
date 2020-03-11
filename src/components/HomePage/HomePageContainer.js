import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStores } from "../../store/store/actions";
import { fetchProducts } from "../../store/product/actions";

import ProductsList from "./ProductsList";
import SearchProductInput from "./SearchProductInput";
import StoresList from "./StoresList";
import SearchStoreInput from "./SearchStoreInput";
// import Map from "../Map/Map";

class HomePageContainer extends Component {
  state = {
    pageNumber: 1
  };

  componentDidMount() {
    // this.props.fetchStores(this.state.pageNumber);
    this.props.fetchProducts(this.state.pageNumber);
  }

  prevPage = () => {
    if (this.state.pageNumber > 1)
      this.props.fetchProducts(this.state.pageNumber - 1);
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  nextPage = () => {
    this.props.fetchProducts(this.state.pageNumber + 1);
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  render() {
    const productsFetched =
      this.props.products.rows && this.props.products.rows.length > 0;

    const storesFetched =
      this.props.stores.rows && this.props.stores.rows.length > 0;

    console.log("homepage props", this.props);

    return (
      <div>
        <SearchProductInput />
        {productsFetched && (
          <ProductsList
            products={this.props.products.rows}
            fetchProducts={this.props.fetchProducts}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
            pageNumber={this.state.pageNumber}
          />
        )}
        <SearchStoreInput />
        {storesFetched && (
          <StoresList
            stores={this.props.stores.rows}
            fetchStores={this.props.fetchStores}
          />
        )}
        {/* <Map /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
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
