import React from "react";
import { mount } from "enzyme";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Inputs from "../components/inputBoxes";
import SumBox from '../components/sumBox';

let wrapper; 

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
})

test('should contain inputs and sumbox', () => {
  expect(wrapper.find(Inputs)).toExist();
  expect(wrapper.find(SumBox)).toExist();
});
