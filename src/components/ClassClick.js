import React, { Component } from "react";

class ClassClick extends Component {
  state = {};
  clickMe() {
    console.log("clicked me thank you");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickMe}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
