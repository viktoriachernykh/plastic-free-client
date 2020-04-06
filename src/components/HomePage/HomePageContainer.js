import React, { Component } from "react";
// import { connect } from "react-redux";

// import { fetchStores } from "../../store/store/actions";
// import { fetchProducts } from "../../store/product/actions";

import SearchProductInput from "./SearchProductInput";
import ProductsList from "./ProductsList";
// import StoresList from "./StoresList";
// import Map from "../Map/Map";

export default class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <SearchProductInput />
        <div className="container">
          <ProductsList />
          {/* {stores ? <Map stores={stores} /> : "Loading map..."} */}
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     stores: state.stores.list.rows,
//     storesLength: state.stores.list.count,
//     products: state.products.list.rows,
//     productsLength: state.products.list.count,
//     user: state.session.user,
//     token: state.session.jwt,
//   };
// }

// export default connect(mapStateToProps, {})(HomePageContainer);
