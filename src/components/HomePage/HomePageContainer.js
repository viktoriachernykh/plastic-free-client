import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStores } from "../../store/store/actions";
import { fetchProducts } from "../../store/product/actions";

import ProductsList from "./ProductsList";
import StoresList from "./StoresList";

// import Map from "../Map/Map";

class HomePageContainer extends Component {
  state = {
    pageNumber: 1
  };

  componentDidMount() {
    this.props.fetchStores(this.state.pageNumber);
    this.props.fetchProducts(this.state.pageNumber);
  }

  prevPage = () => {
    if (this.state.pageNumber > 1)
      this.props.fetchProducts(this.state.pageNumber - 1);
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  nextPage = () => {
    if (this.state.pageNumber)
      this.props.fetchProducts(this.state.pageNumber + 1);
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  render() {
    console.log("homepage props", this.props);

    return (
      <div>
        <ProductsList
          products={this.props.products}
          fetchProducts={this.props.fetchProducts}
          prevPage={this.prevPage}
          nextPage={this.nextPage}
          pageNumber={this.state.pageNumber}
        />
        <StoresList
          stores={this.props.stores}
          // fetchStores={this.props.fetchStores}
          // prevPage={this.prevPage}
          // nextPage={this.nextPage}
          // pageNumber={this.state.pageNumber}
        />
        {/* <Map /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state home", state);

  return {
    stores: state.stores.rows,
    storesLength: state.stores.count,
    products: state.products.rows,
    productsLength: state.products.count,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, {
  fetchStores,
  fetchProducts
})(HomePageContainer);
