import React, { useState } from "react";

function FormFunction2() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h1>I have entered {name.length} characters</h1>
    </div>
  );
}

export default FormFunction2;
