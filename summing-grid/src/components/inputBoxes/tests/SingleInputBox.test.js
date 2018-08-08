import React from "react";
import Immutable from "immutable";
import { mount } from "enzyme";
import { SingleInputBox } from "../SingleInputBox";
import { Input } from "../../common/Input";
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
      <SingleInputBox title={'hey there'} index={2} />
    </Provider>
  );
});

test("should render single input box", () => {
  expect(wrapper.props().children.props.title).toEqual('hey there');
  expect(wrapper.props().children.props.index).toEqual(2);
});

test('should render and input', () => {
    expect(wrapper.find(Input)).toExist();
});

test('should render title', () => {
    expect(wrapper.find('h2').text()).toEqual('hey there');
});
