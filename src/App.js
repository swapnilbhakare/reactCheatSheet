import React, { Component } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <ClickCounter name="swap" />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
