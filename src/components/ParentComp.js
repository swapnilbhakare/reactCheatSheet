import React, { PureComponent } from "react";
import MemoComp from "./MemoComp";
// import RegComp from "../components/RegComp";
// import PureComp from "./PureComp";
class ParentComp extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      name: "swapnil",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "swapnil",
      });
    }, 2000);
  }
  render() {
    console.log("****************** parent componet****");
    return (
      <div>
        parent component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}
export default ParentComp;
