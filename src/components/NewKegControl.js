import React from "react";
import NewKegForm from "./AddKeg.js";
import KegList from "./KegList.js";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let addKegButton = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />;
      buttonText = "Back to Keg List";
    } else {
      currentlyVisibleState = <KegList />;
      buttonText = "Add new Keg!";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
