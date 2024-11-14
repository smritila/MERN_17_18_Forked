// app.js

// import Comp1 from "./comp1.js";
// Define a simple React component
function App() {
  return (
    <div id="app">
      <h1>Hello, World!</h1>
      <p>Welcome to my simple React app using CDN links!</p>
      <Comp1 />
    </div>
  );
}

// Render the component into the root element
ReactDOM.render(<App />, document.getElementById("root"));
