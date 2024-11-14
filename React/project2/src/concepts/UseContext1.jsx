import React, { useContext } from "react";
import MyContext from "./MyContext";

function UseContext1() {
  const data = useContext(MyContext);
  return (
    <div>
      <h1>
        I am Use Context component and I can capture data without the use of
        consumer
      </h1>
      <h2>{data}</h2>
    </div>
  );
}

export default UseContext1;
