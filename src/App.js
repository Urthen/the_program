import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  P;
  render() {
    function exist() {
      console.log("I exist!");
    }

    return (
      <div className="App">
        <Header />
        <button onClick={exist()}>Exist</button>
      </div>
    );
  }
}

export default App;
