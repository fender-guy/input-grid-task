import React from "react";
import { connect } from "react-redux";
import { SingleInputBox } from "./SingleInputBox";

const mapState = state => ({
  inputs: state.get("inputs")
});

export const Inputs = props =>
  props.inputs.map((v, i) => (
    <SingleInputBox index={i} key={"singleInput" + i} title={v.get("title")} />
  ));

export default connect(
  mapState,
  {}
)(Inputs);
