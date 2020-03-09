import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../../../store/product/actions";
import AddProductForm from "./AddProductForm";

class AddProductFormContainer extends React.Component {
  state = {
    name: ""
  };

  onSubmit = event => {
    // const token = this.props.token;
    const newProduct = {
      name: this.state.name,
      userId: this.props.user.id
    };
    event.preventDefault();
    this.props.addProduct(newProduct);
    this.setState({
      name: ""
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
