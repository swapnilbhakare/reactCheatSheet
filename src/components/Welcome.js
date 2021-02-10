import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h2> Hey!..{this.props.name}</h2>
      </div>
    );
  }
}

export default Welcome;
