import React from "react";
import { MyConsumer } from "./MyContext";

function Consumer3() {
  return (
    <MyConsumer>
      {(name) => (
        <div>
          <h1>I am consumer 3 and the data to display is {name}</h1>
        </div>
      )}
    </MyConsumer>
  );
}

export default Consumer3;
