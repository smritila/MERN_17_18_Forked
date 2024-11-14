import React from "react";
import "../styles/styles.css";
import homepage1 from "../images/homepage_1.jpg";
function StyleFunction1() {
  const mystyleObj = {
    color: "purple",
    backgroundColor: "pink",
  };
  return (
    <div>
      <h1>Styling in React JS</h1>
      <p>
        Styles can be applied in three ways: <br />
        1. Inline style using style attribute <br />
        2. External CSS file <br />
        3. CSS in JavaScript object
      </p>
      <h3 style={{ backgroundColor: "red", color: "white" }}>
        I am inline style
      </h3>
      <h3 style={mystyleObj}>I am js object style</h3>
      <div class="demo">
        <h1>I am styled using external css</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
          dignissimos! A sunt architecto expedita laborum voluptate, hic velit
          voluptatibus! Commodi fugit placeat nulla amet optio, natus deleniti
          impedit id animi?
        </p>
        <img src={homepage1} alt="my pic here" />
        <img src="image/homepage_1.jpg" alt="pic using public folder" />
      </div>
    </div>
  );
}

export default StyleFunction1;
