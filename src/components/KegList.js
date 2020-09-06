import React from "react";
import Keg from "./Keg";
import { v4 } from "uuid";
const masterKegList = [];
const keg = {};
keg.id = v4();

function KegList() {
  return (
    <React.Fragment>
      {masterKegList.map((keg, index) => (
        <Keg
          names={keg.names}
          price={keg.price}
          abv={keg.abv}
          description={keg.description}
          key={index}
        />
      ))}
      <hr />
    </React.Fragment>
  );
}

export default KegList;
