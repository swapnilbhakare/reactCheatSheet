import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // short circuit operators rendering
    return this.state.isLoggedIn && <div>Hello swap</div>;

    //   ternary operators rendering
    // return this.state.isLoggedIn ? (
    //   <div>Hello swap</div>
    // ) : (
    //   <div>Hello alien</div>
    // );
    // element variables  rendering
    // let message;
    // if (this.state.isLoggedIn) {
    //   return <div>Hello swap</div>;
    // } else {
    //   return <div>Hello alien</div>;
    // }
    //  if else  rendering
    //if (this.state.isLoggedIn) {
    //   return <div>Hello swap</div>;
    // } else {
    //   return <div>Hello alien</div>;
    //}
  }
}

export default UserGreeting;
