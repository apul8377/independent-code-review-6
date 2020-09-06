import React from "react";
import Keg from "./Keg.js";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.kegList).map((keg) => (
        <Keg
          whenKegClicked={props.onKegSelection}
          names={keg.names}
          price={keg.price}
          abv={keg.abv}
          description={keg.description}
          key={keg.key}
          id={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
};

export default KegList;
