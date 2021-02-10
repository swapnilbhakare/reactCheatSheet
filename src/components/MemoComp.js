import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Componet");
  return <div>{name}</div>;
}
export default React.memo(MemoComp);
