import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../../../store/product/actions";
import AddProductForm from "./AddProductForm";

class AddProductFormContainer extends React.Component {
  state = {
    name: "",
    price: "",
    // store: ""
    store1: "", // EXPECTED INTEGER = STORE ID
    store2: "", // EXPECTED INTEGER = STORE ID
    store3: "" // EXPECTED INTEGER = STORE ID
  };

  onSubmit = event => {
    console.log(this.state);
    // const token = this.props.token;
    const newProduct = {
      name: this.state.name,
      price: this.state.price,
      // stores: [this.state.store]
      stores: [this.state.store1, this.state.store2, this.state.store3],
      userId: this.props.user.id
    };
    console.log("newProduct", newProduct);

    event.preventDefault();
    this.props.addProduct(newProduct);

    this.setState({
      name: "",
      price: "",
      // store: ""
      store1: "",
      store2: "",
      store3: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <AddProductForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.session.user }
    // token: state.session.jwt
  };
}

export default connect(mapStateToProps, { addProduct })(
  AddProductFormContainer
);
