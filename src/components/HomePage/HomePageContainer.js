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
    if (this.state.pageNumber > 1) {
      this.props.fetchProducts(this.state.pageNumber - 1);
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  };

  nextPage = () => {
    if (this.props.productsLength > this.state.pageNumber * 10) {
      this.props.fetchProducts(this.state.pageNumber + 1);
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
  };

  render() {
    const { products, stores } = this.props;

    return (
      <div>
        <ProductsList
          products={products}
          fetchProducts={this.props.fetchProducts}
          prevPage={this.prevPage}
          nextPage={this.nextPage}
          pageNumber={this.state.pageNumber}
        />
        <StoresList
          stores={stores}
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
  return {
    stores: state.stores.list.rows,
    storesLength: state.stores.list.count,
    products: state.products.list.rows,
    productsLength: state.products.list.count,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, {
  fetchStores,
  fetchProducts
})(HomePageContainer);
