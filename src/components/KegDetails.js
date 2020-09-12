import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit, onClickingSellPint } = props;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
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
      <hr />
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
