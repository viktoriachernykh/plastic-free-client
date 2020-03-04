import React from "react";
import { connect } from "react-redux";
import { signup } from "../../../store/user/actions";
import SignupForm from "./SignupForm";
import LoginFormContainer from "../Login/LoginFormContainer";

class SignupFormContainer extends React.Component {
  state = { name: "", email: "", password: "" };

  onSubmit = event => {
    console.log("sign up form values?", this.state);

    event.preventDefault();
    this.props.signup(this.state.name, this.state.email, this.state.password);
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (Object.keys(this.props.user).length) {
      return (
        <div>
          <h1>Sign up</h1>
          <SignupForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          <p>You have signed up!</p>
          <LoginFormContainer />
        </div>
      );
    }

    return (
      <div>
        <h1>Sign up</h1>
        <SignupForm
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
  };
}

export default connect(mapStateToProps, { signup })(SignupFormContainer);
