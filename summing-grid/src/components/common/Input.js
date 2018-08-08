import React from "react";
import { connect } from "react-redux";
import { updateValues } from "../../redux/inputs";

const mapState = (state, ownProps) => ({
    value: state.getIn(["inputs", ownProps.index, "value"])
  });

export const Input = props => {
  const { value, index } = props;

  const changeHandler = e => {
    const inputValue = e.target.value;
    if (inputValue.match(/^\d+$/) || !inputValue) {
      props.updateValues(inputValue, index);
    }
  };

  return <div className="input-container">
    <input
      className="number-input"
      type="text"
      {...{ value }}
      onChange={changeHandler}
    />
  </div>;
};

export default connect(
  mapState,
  { updateValues }
)(Input);
