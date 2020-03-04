import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePageContainer from "./components/HomePage/HomePageContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
