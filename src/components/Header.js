import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="nav">
        {/* {this.props.token ? ( */}
        <Link to={"/"}>Home</Link>
        <Link to="/logout">Log out</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // token: state.session.jwt
  };
}

export default connect(mapStateToProps)(Header);
