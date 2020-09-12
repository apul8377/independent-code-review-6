import React from "react";
import Keg from "./Keg.js";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg, index) => (
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          price={keg.price}
          abv={keg.abv}
          description={keg.description}
          id={keg.id}
          key={index}
          pints={keg.pints}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;
