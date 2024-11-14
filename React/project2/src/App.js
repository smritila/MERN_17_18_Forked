import logo from "./logo.svg";
import "./App.css";
import FormFunction from "./concepts/FormFunction";
import FormFunction2 from "./concepts/FormFunction2";
import StyleFunction1 from "./concepts/StyleFunction1";
import PropDrill1 from "./concepts/PropDrill1";
import ParentComp1 from "./concepts/ParentComp1";
import ParentComp2 from "./concepts/ParentComp2";
import Provider1 from "./concepts/Provider1";

function App() {
  const student = {
    name: "John Doe",
    age: 25,
  };
  return (
    <div>
      {/* <FormFunction /> */}
      {/* <FormFunction2 /> */}
      {/* <StyleFunction1 /> */}
      {/* <PropDrill1 student={student} /> */}
      {/* <ParentComp1 /> */}
      {/* <ParentComp2 /> */}
      <Provider1 />
    </div>
  );
}

export default App;
