import React from "react";
import NewKegForm from "./AddKeg.js";
import KegList from "./KegList.js";
import PropTypes from "prop-types";
import KegDetail from "./KegDetails";
import EditNewKeg from "./EditKegForm";

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
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({ editing: true });
  };

  handleAddKeg = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      formVisibleOnPage: false,
      kegList: newKegList,
    });
  };

  handleDeleteKeg = (id) => {
    const newKegList = this.state.kegList.filter((keg) => keg.id !== id);
    this.setState({
      kegList: newKegList,
      selectedKeg: null,
    });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter((keg) => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
    console.log(selectedKeg);
  };

  handleEditingKegInList = (kegToEdit) => {
    const editedKegList = this.state.kegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      kegList: editedKegList,
      editing: false,
      selectedKeg: null,
    });
  };

  handleSellPintClick = (selectedKeg) => {
    const amount = this.state.selectedKeg.pints;
    let newAmount;
    newAmount = parseInt(amount);
    if (newAmount > 0) {
      newAmount--;
    } else {
      alert("Keg is empty, please replace!");
    }

    console.log(newAmount);
    this.setState({
      editing: false,
      selectedKeg: selectedKeg,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditNewKeg
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeleteKeg}
          onClickingEdit={this.handleEditClick}
          onClickingSellPint={this.handleSellPintClick}
        />
      );
      buttonText = "Return to List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKeg={this.handleAddKeg} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.kegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      buttonText = "Add Keg";
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
