import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "swapnil",
    };
  }
  changeName = () => {
    this.setState({
      message: "nil",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeName()}>Magic</button>
      </div>
    );
  }
}

export default Message;
