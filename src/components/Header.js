import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to={"/"}>Home</Link>
        {this.props.token ? (
          <div>
            <Link to="/logout">Log out</Link>
            <Link to={`/user/${this.props.user.id}`}>My page</Link>
          </div>
        ) : (
          <div>
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
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps)(Header);
