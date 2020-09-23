import React from "react";
import Keg from "./Keg.js";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {Object.values(props.kegList).map((keg) => {
        return (
          <Keg
            whenKegClicked={props.onKegSelection}
            name={keg.name}
            price={keg.price}
            abv={keg.abv}
            description={keg.description}
            id={keg.id}
            key={keg.id}
            pints={keg.pints}
          />
        );
      })}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
};

export default KegList;
