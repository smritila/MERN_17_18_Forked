import React from "react";
import Consumer1 from "./Consumer1";
import { MyProvider } from "./MyContext";
import UseContext1 from "./UseContext1";

function Provider1() {
  const myname = "Richie";
  return (
    <MyProvider value={myname}>
      <div>
        <Consumer1 />
        <UseContext1 />
      </div>
    </MyProvider>
  );
}

export default Provider1;
