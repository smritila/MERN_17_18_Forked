import React from "react";
import ChildComp2 from "./ChildComp2";

function ParentComp2() {
  let showMessage = (childData) => {
    document.getElementById("childspan").innerHTML = childData;
  };
  return (
    <div>
      <h2>I am parent, will display data from child</h2>
      <h3>
        Showing child data: <span id="childspan"></span>
      </h3>
      <ChildComp2 handleClick={showMessage} />
    </div>
  );
}

export default ParentComp2;

// React.createContext()
// Context.Consumer() or React.useContext() hook