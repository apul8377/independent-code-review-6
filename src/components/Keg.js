import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  const Stylization = {
    backgroundColor: "#ccff99",
    fontFamily: "Calibri",
    borderStyle: "solid",
    textAlign: "center",
  };
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <div style={Stylization}>
          <h2> {props.name}</h2>{" "}
          <b>
            abv: {props.abv}
            <br />
            price: {props.price}
          </b>
          <br />
          <p>
            <i>{props.description}</i>
          </p>
          Remaining: {props.pints}
        </div>
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
