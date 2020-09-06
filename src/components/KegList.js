import React from "react";
import Keg from "./Keg";
import { v4 } from "uuid";
const masterKegList = [];

function KegList() {
  return (
    <React.Fragment>
      {masterKegList.map((keg, index) => (
        <Keg
          names={keg.names}
          location={keg.location}
          issue={keg.issue}
          key={index}
        />
      ))}
      <hr />
    </React.Fragment>
  );
}

export default KegList;
