import React from "react";
import NewKegForm from "./AddKeg.js";
import KegList from "./KegList.js";
import KegDetail from "./KegDetails";
class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
      kegList: [],
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
        kegList: [],
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddKeg = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
      kegList: newKegList,
    });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter((keg) => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({ editing: true });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} />;
      buttonText = "Return to List";
    } else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <NewKegForm onNewKeg={this.handleAddKeg} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.kegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
      buttonText = "Add Ticket";
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
