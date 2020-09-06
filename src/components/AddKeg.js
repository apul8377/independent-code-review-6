import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm.js";

function NewKegForm(props) {
  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKeg({
      name: event.target.name.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      description: event.target.description.value,
      key: v4(),
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegSubmission}
        buttonText="Add!"
      />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKeg: PropTypes.func,
};
export default NewKegForm;
