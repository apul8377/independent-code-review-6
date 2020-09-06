import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NewKegControl from "./AddKeg.js";
function App() {
  return (
    <React.Fragment>
      <KegList />
      <NewKegControl />
    </React.Fragment>
  );
}

export default App;
