import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Cards from "./components/cards";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Jumbotron />
        <div>
          <div className="bnf bn1">a</div>
          <div className="bn bn2">a</div>
          <div className="bnf bn3">a</div>
          <div className="bn bn4">a</div>
          <div className="bnf bn5">a</div>
          <div className="bn bn6">a</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
