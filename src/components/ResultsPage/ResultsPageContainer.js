// import React, { Component } from "react";
// import { connect } from "react-redux";

// import { fetchStores } from "../../store/store/actions";
// import { fetchProducts } from "../../store/product/actions";

// import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";
// import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";

// class HomePageContainer extends Component {
//   componentDidMount() {
//     console.log("props", this.props);
//     this.props.fetchStores();
//     this.props.fetchProducts();
//   }
//   render() {
//     return <div>results</div>;
//   }
// }

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     stores: state.stores,
//     products: state.products,
//     user: state.session.user,
//     token: state.session.jwt
//   };
// }

// export default connect(mapStateToProps, {
//   fetchStores,
//   fetchProducts
// })(HomePageContainer);
