import React from "react";
import "../css/App.css";
import NewKegControl from "./AddKeg.js";
import KegList from "./KegList.js";
function App() {
  return (
    <React.Fragment>
      <KegList />
      <NewKegControl />
    </React.Fragment>
  );
}

export default App;
