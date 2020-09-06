import React from "react";
import KegDetails from "./KegDetails";

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
