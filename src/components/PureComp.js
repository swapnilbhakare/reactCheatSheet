import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("pure componet *");
    return <div>pure componet {this.props.name}</div>;
  }
}
export default PureComp;
