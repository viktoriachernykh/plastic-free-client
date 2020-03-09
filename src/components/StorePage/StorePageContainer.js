import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";

import { fetchStore } from "../../store/store/actions";

export class StorePageContainer extends Component {
  state = { toggle: false };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStore(id);
  }

  toggleAddForm = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const products =
      this.props.store.products &&
      this.props.store.products.length > 0 &&
      this.props.store.products;

    const store = this.props.store.store && this.props.store.store;

    return (
      <div>
        {store && (
          <div>
            <p>name: {store.name}</p>
            <p>address: {store.address}</p>
            {products && (
              <div>
                {this.props.store.products &&
                  this.props.store.products.map((product, index) => (
                    <Link to={`/product/${product.id}`} key={index}>
                      <p>{product.name}</p>
                    </Link>
                  ))}
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
    store: state.stores,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { fetchStore })(StorePageContainer);
