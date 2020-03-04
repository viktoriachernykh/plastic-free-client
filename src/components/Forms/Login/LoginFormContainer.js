import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../store/user/actions";
import LoginForm from "./LoginForm";

class LoginFormContainer extends Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    // console.log("log in form values?", this.state);
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // if (this.props.token) {
    //   setTimeout(() => {
    //     this.props.history.push("/");
    //   }, 500);
    //   return <p>You have loged in!</p>;
    // }
    return (
      <div>
        <h1>Login</h1>
        <LoginForm
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
    // token: state.session.jwt
  };
}

export default connect(mapStateToProps, { login })(LoginFormContainer);
