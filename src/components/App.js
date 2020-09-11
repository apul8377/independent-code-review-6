import React from "react";
import "../css/App.css";
import KegControl from "./NewKegControl.js";
import Header from "./Header.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
  );
}

export default App;
