import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import ProductPageContainer from "./components/ProductPage/ProductPageContainer";
import StorePageContainer from "./components/StorePage/StorePageContainer";
import UserPageContainer from "./components/UserPage/UserPageContainer";
import SignupFormContainer from "./components/Forms/Signup/SignupFormContainer";
import LoginForm from "./components/Forms/LoginForm";
import Logout from "./components/Forms/Logout/Logout";

import "./styles/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/product/:id" component={ProductPageContainer} />
          <Route exact path="/store/:id" component={StorePageContainer} />
          <Route exact path="/user/:id" component={UserPageContainer} />
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
