import React from "react";
import { connect } from "react-redux";
import { addStore } from "../../../store/store/actions";
import AddStoreForm from "./AddStoreForm";

class AddStoreFormContainer extends React.Component {
  state = {
    name: "",
    address: "",
    opening_hours: ""
  };

  onSubmit = event => {
    // const token = this.props.token;
    const newStore = {
      name: this.state.name,
      address: this.state.address,
      opening_hours: this.state.opening_hours
      // userId: this.props.user.id
    };

    event.preventDefault();
    this.props.addStore(newStore);

    this.setState({
      name: "",
      address: "",
      opening_hours: ""
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
        <AddStoreForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: { ...state.session.user },
//     token: state.session.jwt
//   };
// }

export default connect(null, { addStore })(AddStoreFormContainer);
