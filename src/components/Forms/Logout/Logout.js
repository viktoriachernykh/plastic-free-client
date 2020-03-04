import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../../store/user/actions";

class Logout extends Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    // if (!this.props.token) {
    //   setTimeout(() => {
    //     this.props.history.push("/login");
    //   }, 1000);
    //   return <div>Log out successful!</div>;
    // }
    return (
      <div>
        <h1>Logout</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("logout state", state);
  return {
    // token: state.session.jwt
  };
}

export default connect(mapStateToProps, { logout })(Logout);
