import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import SignupFormContainer from "./components/Forms/Signup/SignupFormContainer";
import LoginFormContainer from "./components/Forms/Login/LoginFormContainer";
import Logout from "./components/Forms/Logout/Logout";
// import ResultsPageContainer from "./components/ResultsPage/ResultsPageContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          {/* <Route exact path="/results" component={ResultsPageContainer} /> */}
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
