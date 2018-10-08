import React from "react";
import { connect } from "react-redux";
class Incremator extends React.Component {
  render() {
    const { counter, helpMsg } = this.props;
    console.log("this.props", this.props);
    return (
      <React.Fragment>
        <div>{counter}</div>
        <button onClick={this._handleIncrement}>Increment Me</button>
        <button onClick={this._handleDecrement}>Decrement Me</button>
        <div>{helpMsg}</div>
      </React.Fragment>
    );
  }

  _handleIncrement = () => {
    console.log("calling increment reducer");
    this.props.dispatch({ type: "INCREMENT" });
  };

  _handleDecrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return state;
};

export default connect(mapStateToProps)(Incremator);
