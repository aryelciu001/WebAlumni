import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Cards from "./components/cards";

class App extends Component {
  state = {
    alumni: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
      { id: 4, name: "d" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Jumbotron />
        <div className="container">
          <div className="wrap">
            {this.state.alumni.map(card => (
              <Cards />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
