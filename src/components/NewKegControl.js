import React from "react";
import NewKegForm from "./AddKeg.js";
import KegList from "./KegList.js";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  render() {
    let currentlyVisibleState = null;
    let addKegButton = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />;
    } else {
      currentlyVisibleState = <KegList />;
      addKegButton = <button onClick={this.handleClick}>Add new keg!</button>;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKegButton}
      </React.Fragment>
    );
  }
}

export default KegControl;
