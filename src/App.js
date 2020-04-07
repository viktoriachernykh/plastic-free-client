import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import ProductPageContainer from "./components/ProductPage/ProductPageContainer";
import StorePage from "./components/StorePage/StorePage";
import UserPage from "./components/UserPage/UserPage";
import SignupForm from "./components/Forms/SignupForm";
import LoginForm from "./components/Forms/LoginForm";
import Logout from "./components/Forms/Logout";

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
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
