import React from "react";
import classnames from "classnames";

export const GridBox = props => {
  const { children, classNames } = props;
  const classes = classnames("grid-box", classNames);

  return <div className={classes}>{children}</div>;
};
