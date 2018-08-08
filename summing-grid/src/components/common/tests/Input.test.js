import React from "react";
import { mount } from "enzyme";
import { Input } from "../Input";

let wrapper;
let updateValues = jest.fn();

beforeEach(() => {
  wrapper = mount(<Input value={"55"} index={0} {...{ updateValues }} />);
});

test("should render input", () => {
  expect(wrapper.find(".number-input")).toExist();
});

test('should display value', () => {
    const input = wrapper.find('.number-input');
    expect(input.props().value).toEqual('55');
    
});

test("should handle change", () => {
    const input = wrapper.find('.number-input');
    input.simulate('change', {target: {value: '22'}});
    expect(updateValues).toHaveBeenCalled();
    expect(updateValues.mock.calls).toEqual([['22', 0]]);
});
