import React, { Component } from "react";
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import SearchPlaceInput from "./SearchPlaceInput";
// import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";
// import AddStoreSearch from "./SearchPlaceInputContainer";
// import { fetchStores } from "../../store/store/actions";
import { findProduct } from "../../store/product/actions";
import { addStore } from "../../store/store/actions";

export class ProductPageContainer extends Component {
  state = { toggle: false };

  componentDidMount() {
    const key = this.props.match.params.key;
    this.props.findProduct(key);
  }

  toggleAddForm = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  addStore = async address => {
    console.log("address ProductPage", address);
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    const newLocation = {
      name: address,
      address: results[0].formatted_address,
      opening_hours: "10-20",
      google_place_id: results[0].place_id,
      // userId: this.props.user.id
      // products: this.props.product[0].id,
      coordinate_lat: latLng.lat,
      coordinate_lng: latLng.lng
    };
    console.log("results", results);
    console.log("newLocation", newLocation);
    this.props.addStore(newLocation);
  };

  render() {
    const stores =
      this.props.product[0].stores &&
      this.props.product[0].stores.length > 0 &&
      this.props.product[0].stores;

    const product = this.props.product[0] && this.props.product[0];

    return (
      <div>
        {stores ? (
          <div>
            We have <b>{stores.length}</b> stores with plastic-free{" "}
            <b>{product.name}</b> product
            {this.props.token && (
              <p>
                Found one more store with plastic-free <b>{product.name}</b>?
                Add it!
                <button onClick={this.toggleAddForm}>Add it</button>
              </p>
            )}
            {this.state.toggle && <SearchPlaceInput addStore={this.addStore} />}
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
            {this.state.toggle && <SearchPlaceInput addStore={this.addStore} />}
          </div>
        )}
        {/* <p>name {product && product.name}</p> */}
        {/* <p>price {product && product.price}</p> */}
        <p>
          {stores && stores.map((store, index) => <li key={index}>{store}</li>)}
        </p>
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

export default connect(mapStateToProps, { findProduct, addStore })(
  ProductPageContainer
);
