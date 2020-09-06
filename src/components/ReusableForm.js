import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div>
          <input type="text" name="name" placeholder="Beer Name" />
        </div>
        <div>
          <input type="text" name="price" placeholder="$$$" />
        </div>
        <div>
          <input type="text" name="abv" placeholder="ABV" />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Short summary of flavor profile"
          />
        </div>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
