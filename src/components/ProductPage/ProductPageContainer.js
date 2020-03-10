import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import SearchPlaceInput from "./SearchPlaceInput";

import { fetchProduct } from "../../store/product/actions";
import { addStore } from "../../store/store/actions";

export class ProductPageContainer extends Component {
  state = { toggle: false };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
  }

  toggleAddForm = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

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
    // console.log("newStore", newStore);
    this.props.addStore(newStore, userId, productId);
  };

  render() {
    const stores =
      this.props.product.stores &&
      this.props.product.stores.length > 0 &&
      this.props.product.stores;

    const product = this.props.product.product && this.props.product.product;
    return (
      <div>
        {product && (
          <div>
            {stores ? (
              <div>
                We have <b>{stores.length}</b> stores with plastic-free{" "}
                <b>{product.name}</b> product
                {this.props.token && (
                  <p>
                    Found one more store with plastic-free <b>{product.name}</b>
                    ?<button onClick={this.toggleAddForm}>Add it</button>
                  </p>
                )}
                {this.state.toggle && (
                  <SearchPlaceInput addStore={this.addStore} />
                )}
                {stores.map((store, index) => (
                  <Link to={`/store/${store.id}`} key={index}>
                    <p>{store.name}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div>
                <p>
                  We don't have stores with plastic-free <b>{product.name}</b>{" "}
                  product
                </p>
                {this.props.token && (
                  <p>
                    If you found one, add it!
                    <button onClick={this.toggleAddForm}>Add it!</button>
                  </p>
                )}
                {this.state.toggle && (
                  <SearchPlaceInput addStore={this.addStore} />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.products,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { fetchProduct, addStore })(
  ProductPageContainer
);
