import React from "react";

function ChildComponet(props) {
  return (
    <div>
      <button onClick={() => props.greetParent(" child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponet;
