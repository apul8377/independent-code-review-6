import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        {props.name} ({props.abv}) - {props.price}
        <br />
        <p>{props.description}</p>
        Remaining: {props.pints}
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  description: PropTypes.string,
  pints: PropTypes.number,
};

export default Keg;
