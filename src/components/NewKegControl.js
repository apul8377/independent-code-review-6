import React from "react";
import NewKegForm from "./AddKeg.js";
import KegList from "./KegList.js";
import PropTypes from "prop-types";
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
      kegList: newKegList,
    });
  };

  handleDeleteKeg = (id) => {
    const newKegList = this.state.kegList.filter((ticket) => ticket.id !== id);
    this.setState({
      kegList: newKegList,
      selectedKeg: null,
    });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(
      (ticket) => ticket.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
    console.log(selectedKeg);
  };

  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({ editing: true });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeleteKeg}
        />
      );
      buttonText = "Return to List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKeg={this.handleAddKeg} />;
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.kegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  kegList: PropTypes.array,
};

export default KegControl;
