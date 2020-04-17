import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import SignupPage from "./components/Header/SignupPage";
import LoginPage from "./components/Header/LoginPage";
import LogoutPage from "./components/Header/LogoutPage";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import ProductPageContainer from "./components/ProductPage/ProductPageContainer";
import StorePage from "./components/StorePage/StorePage";
import UserPage from "./components/UserPage/UserPage";

import "./styles/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/product/:id" component={ProductPageContainer} />
          <Route exact path="/store/:id" component={StorePage} />
          <Route exact path="/user/:id" component={UserPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
