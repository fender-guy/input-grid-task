import React from "react";
import { connect } from "react-redux";
import { sumSelector } from "../../redux/inputs";
import { GridBox } from "../common/GridBox";

const mapState = state => ({
  sum: sumSelector(state)
});

export const SumBox = props => {
  const { sum } = props;
  return (
    <GridBox>
      <h2>Sum</h2>
      <div>{sum}</div>
    </GridBox>
  );
};

export default connect(
  mapState,
  {}
)(SumBox);
