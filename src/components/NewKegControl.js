import React from "react";
import NewKegForm from "./AddKeg.js";
import KegList from "./KegList.js";
import PropTypes from "prop-types";
import KegDetail from "./KegDetails";
import EditNewKeg from "./EditKegForm";
import { connect } from "react-redux";
import * as a from "./../actions";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      // this.setState((prevState) => ({
      // formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleAddKeg = (newKeg) => {
    const { dispatch } = this.props;
    //const { name, price, abv, description, pints } = newKeg;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleDeleteKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({ selectedKeg: null });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegList[id];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    // const { name, price, abv, description, pints } = kegToEdit;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null,
    });
  };

  handleSellPintClick = (selectedKeg) => {
    let amount = this.state.selectedKeg.pints;
    let newAmount;
    newAmount = parseInt(amount);
    if (newAmount > 0) {
      newAmount--;
    } else {
      alert("Keg is empty, please replace!");
    }
    this.state.selectedKeg.pints = newAmount;
    console.log(newAmount);
    this.setState({
      editing: false,
      selectedKeg: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    const Stylization = {
      backgroundColor: "#ffcc66",
      position: "fixed",
      left: "40%",
      textAlign: "center",
      width: "20%",
    };
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
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKeg={this.handleAddKeg} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.props.kegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        <div style={Stylization}>
          {currentlyVisibleState}

          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}
KegControl.propTypes = {
  kegList: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    kegList: state.kegList,
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
