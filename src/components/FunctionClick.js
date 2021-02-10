import React from "react";

function FunctionClick() {
  function btnClicked() {
    console.log("button Clicked");
  }
  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
}

export default FunctionClick;
