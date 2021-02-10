import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

export class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>hover {count} times</h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
