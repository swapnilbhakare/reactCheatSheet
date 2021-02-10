import React, { Component } from "react";

class EvendBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "Good bye!",
  //     });
  //     console.log(this);
  //   }
  clickHandler = () => {
    this.setState({
      message: "Good bye!",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={() => this.clickHandler()}>click</button> */}
        {/* <button onClick={this.clickHandler}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EvendBind;
