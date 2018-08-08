import React from "react";
import Immutable from "immutable";
import { mount } from "enzyme";
import { Inputs } from "../index";
import { SingleInputBox } from "../SingleInputBox";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

let wrapper;

const inputs = Immutable.fromJS([
  { title: "test1", value: "1" },
  { title: "test2", value: "2" },
  { title: "test3", value: "3" }
]);

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Inputs {...{ inputs }} />
    </Provider>
  );
});

test("should render single input boxes", () => {
  expect(wrapper.find(SingleInputBox).length).toEqual(3);
});
