import React from "react";
import { GridBox } from "../common/GridBox";
import Input from "../common/Input";

export const SingleInputBox = props => {
  const { title, index } = props;
  return (
    <GridBox>
      <h2>{title}</h2>
      <Input {...{ index }} />
    </GridBox>
  );
};
