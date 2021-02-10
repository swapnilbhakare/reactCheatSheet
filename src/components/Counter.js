import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  Increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("callback value is", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={() => this.Increment()}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Counter;
