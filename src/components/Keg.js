import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>
          ({props.key})- {props.name}
          <hr />
          {props.price}
          <hr />
          {props.abv}
        </h3>
        <p>{props.description}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  description: PropTypes.string,
  key: PropTypes.string,
};

export default Keg;
