import React, { Component } from "react";
import { connect } from "react-redux";

// import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";

import { findStore } from "../../store/store/actions";

export class StorePageContainer extends Component {
  state = { toggle: false };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    console.log("this store page", this);
    this.props.findStore(id);
  }

  toggleAddForm = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    // const stores =
    //   this.props.product[0].stores &&
    //   this.props.product[0].stores.length > 0 &&
    //   this.props.product[0].stores;

    // const product = this.props.product[0] && this.props.product[0];

    return (
      <div>
        <p>name: {this.props.store.name}</p>
        <p>address: {this.props.store.address}</p>
        <p>opening hours: {this.props.store.opening_hours}</p>
        {/* {stores ? (
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
            {this.state.toggle && <AddStoreFormContainer />}
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
            {this.state.toggle && <AddStoreFormContainer />}
          </div>
        )}
      <p>name {product && product.name}</p> <p>price {product && product.price}</p>
        <p>
          {stores && stores.map((store, index) => <li key={index}>{store}</li>)}
        </p>{" "}
        */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state.stores,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { findStore })(StorePageContainer);
