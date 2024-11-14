import React from "react";

function ChildComp2({ handleClick }) {
  console.log(handleClick);
  return (
    <div>
      <p>Please click button to view child data</p>
      <button
        onClick={() => {
          handleClick("I am data from child");
        }}
      >
        View Data
      </button>
    </div>
  );
}

export default ChildComp2;
