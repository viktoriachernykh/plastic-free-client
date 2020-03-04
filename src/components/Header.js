import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.token ? (
          <div className="nav">
            <Link to={"/"}>Home</Link>
            <Link to="/logout">Log out</Link>
          </div>
        ) : (
          <div className="nav">
            <Link to={"/"}>Home</Link>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.session.jwt
  };
}

export default connect(mapStateToProps)(Header);
