function App() {
  // JSX: JavaScript XML
  //   A JS function returns a html element
  return (
    <div id="App">
      <h1 style={{ color: "red", backgroundColor: "purple" }}>
        I am app.js file
      </h1>
      <Func1 />
    </div>
  );
}
ReactDOM.render(<App></App>, document.getElementById("root"));
