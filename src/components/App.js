import React from "react";
import "../css/App.css";
import NewKegControl from "./AddKeg.js";
import KegList from "./KegList.js";
import Header from "./Header.js";
function App() {
  return (
    <React.Fragment>
      <Header />
      <NewKegControl />
    </React.Fragment>
  );
}

export default App;
