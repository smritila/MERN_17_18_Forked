import React from "react";
import { MyConsumer } from "./MyContext";
import Consumer2 from "./Consumer2";

function Consumer1() {
  return (
    <div>
      <Consumer2 />
    </div>
  );
}

export default Consumer1;
