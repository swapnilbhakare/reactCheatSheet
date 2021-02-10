import React, { Component } from "react";
import ChildComponet from "./ChildComponet";
class ParentComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponet greetParent={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponet;
