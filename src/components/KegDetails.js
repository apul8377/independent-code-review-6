import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const Stylization = {
    backgroundColor: "#ccff99",
    fontFamily: "Calibri",
    borderStyle: "solid",
    textAlign: "center",
  };
  const { keg, onClickingDelete, onClickingEdit, onClickingSellPint } = props;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <div style={Stylization}>
        <h3>
          {keg.name} ({keg.abv}) - {keg.price}{" "}
        </h3>
        <p>
          <em>{keg.description}</em>
        </p>
        Remaining: {keg.pints}
        <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
        <button onClick={props.onClickingEdit}> Update Keg</button>
        <button onClick={() => onClickingSellPint(keg.pints)}>Sell Pint</button>
      </div>
    </React.Fragment>
  );
}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSellPint: PropTypes.func,
};

export default KegDetail;
