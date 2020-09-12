import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditNewKeg(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      description: event.target.description.value,
      id: keg.id,
      pints: event.target.pints.value,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg"
      />
    </React.Fragment>
  );
}

EditNewKeg.propTypes = {
  onEditKeg: PropTypes.func,
};

export default EditNewKeg;
