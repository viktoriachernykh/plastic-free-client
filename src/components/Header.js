import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="nav">
        <Link to={"/"}>Home</Link>
        {this.props.token ? (
          <>
            <Link to="/logout">Log out</Link>
            <Link to={`/user/${this.props.user.id}`}>My page</Link>
          </>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </>
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
