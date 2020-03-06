import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStores } from "../../store/store/actions";
import { fetchProducts } from "../../store/product/actions";

// import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";
// import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";
import SearchProductInput from "./SearchProductInput";
import Map from "../Map/Map";

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchStores();
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <SearchProductInput />
        <h2>all products</h2>
        {this.props.products &&
          this.props.products.map((product, index) => (
            <Link to={`/product/${product.name}`} key={index}>
              <p>{product.name}</p>
            </Link>
          ))}
        <br />

        <h2>all stores</h2>
        {this.props.stores &&
          this.props.stores.length > 0 &&
          this.props.stores.map((store, index) => (
            <Link to={`/store/${store.id}`} key={index}>
              <p>{store.name}</p>
            </Link>
          ))}

        {/* <AddStoreFormContainer /> */}

        {/* <AddProductFormContainer /> */}

        <Map />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
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
