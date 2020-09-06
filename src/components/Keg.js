import React from "react";
import PropTypes from "prop-types";
function Keg() {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <h3>{props.abv}</h3>
      <h3>{props.description}</h3>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  description: PropTypes.string,
};

export default Keg;
