import React from "react";

const ChildComponents = React.memo((props) => {
  console.log("child component go re-render");
  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponents;
