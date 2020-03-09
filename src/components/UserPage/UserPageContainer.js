import React, { Component } from "react";
import { connect } from "react-redux";

// import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";

// import { fetchStores } from "../../store/store/actions";
// import { findProduct } from "../../store/product/actions";

export class UserPageContainer extends Component {
  componentDidMount() {
    // const id = this.props.match.params.id;
    // this.props.findProduct(key);
    // console.log(id);
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        user page
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>city</p>
        <p>{user.favorite_products}</p>
        <p>{user.favorite_stores}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // product: state.products,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, {})(UserPageContainer);
