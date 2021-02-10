import React, { PureComponent } from "react";

class RegComp extends PureComponent {
  render() {
    console.log("******* regular componet");
    return <div> regular componet {this.props.name}</div>;
  }
}
export default RegComp;
