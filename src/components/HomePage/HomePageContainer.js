import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStores } from "../../store/store/actions";
import { fetchProducts } from "../../store/product/actions";

// import HomePage from "./HomePage";
import SearchProductInput from "./SearchProductInput";
// import SearchStoreInput from "./SearchStoreInput";
// import Map from "../Map/Map";
// import Pages from "./Pages";

// import StoresList from "./StoresList";
import ProductsList from "./ProductsList";

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
    const dataFetched =
      this.props.products.rows && this.props.products.rows.length > 0;
    // this.props.stores.rows &&
    // this.props.stores.rows.length > 0;
    console.log("this home", this);

    return (
      <div>
        <SearchProductInput />
        {dataFetched && (
          <div>
            {/* <StoresList
              stores={this.props.stores.rows}
              fetchStores={this.props.fetchStores}
            /> */}
            <ProductsList
              products={this.props.products.rows}
              fetchProducts={this.props.fetchProducts}
              prevPage={this.prevPage}
              nextPage={this.nextPage}
              pageNumber={this.state.pageNumber}
            />
          </div>
        )}
        {/* <SearchStoreInput /> */}
        {/* <Pages setPage={this.setPage} /> */}
        {/* <button onClick={this.prevPage}>prev</button>
        <b>{this.state.pageNumber}</b>
        <button onClick={this.nextPage}>next</button> */}
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
