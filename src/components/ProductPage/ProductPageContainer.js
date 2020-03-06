import React, { Component } from "react";
import { connect } from "react-redux";

import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";

// import { fetchStores } from "../../store/store/actions";
import { findProduct } from "../../store/product/actions";

export class ProductPageContainer extends Component {
  state = { toggle: false };

  componentDidMount() {
    const key = this.props.match.params.key;
    this.props.findProduct(key);
  }

  toggleAddTicketForm = () => {
    this.setState({
      toggle: !this.state.toggle
    });
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
                <button onClick={this.toggleAddTicketForm}>Add it</button>
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
                <button onClick={this.toggleAddTicketForm}>Add it!</button>
              </p>
            )}
            {this.state.toggle && <AddStoreFormContainer />}
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

export default connect(mapStateToProps, { findProduct })(ProductPageContainer);
