import "./App.css";
import React from "react";
import Inputs from "./inputBoxes";
import SumBox from './sumBox';

export const App = props => (
  <div className="App">
    <div className="box-container">
      <Inputs />
      <SumBox />
    </div>
  </div>
);
