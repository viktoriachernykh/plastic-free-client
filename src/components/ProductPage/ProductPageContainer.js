import React, { Component } from "react";
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { fetchProduct } from "../../store/product/actions";
import { addStore } from "../../store/store/actions";
import ProductPage from "./ProductPage";

export class ProductPageContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
  }

  addStore = async address => {
    const productId = this.props.match.params.id;
    const userId = this.props.user.id;
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    const newStore = {
      name: address,
      address: results[0].formatted_address,
      google_place_id: results[0].place_id,
      coordinate_lat: latLng.lat,
      coordinate_lng: latLng.lng
    };
    this.props.addStore(newStore, userId, productId);
  };

  render() {
    const { product } = this.props;

    return (
      <div>
        {product && (
          <ProductPage
            stores={product.Store}
            product={product}
            token={this.props.token}
            addStore={this.addStore}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.products.single,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { fetchProduct, addStore })(
  ProductPageContainer
);
