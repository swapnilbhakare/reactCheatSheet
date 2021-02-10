import React, { Component, createRef } from "react";

class Input extends Component {
  constructor() {
    super();
    this.InputRef = createRef();
  }
  focusInput() {
    this.InputRef.current.style.backgroundColor = "dodgerblue";
  }

  render() {
    const styles = {
      width: "100px",
      height: "100px",
      backgroundColor: "tomato",
    };
    return (
      <div>
        <div style={styles} ref={this.InputRef}></div>
        {/* <input type="text" ref={this.InputRef} /> */}
      </div>
    );
  }
}

export default Input;
