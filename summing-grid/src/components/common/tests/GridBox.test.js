import React from "react";
import { mount } from "enzyme";
import { GridBox } from "../GridBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <GridBox classNames={['test1', 'test2']}>
      <div className="child">child</div>
    </GridBox>
  );
});

test("should render children", () => {
  expect(wrapper.find(".child")).toExist();
});

test('should add classNames', () => {
    expect(wrapper.find('.grid-box')).toExist();
    expect(wrapper.find('.test1')).toExist();
    expect(wrapper.find('.test2')).toExist();
    expect(wrapper.find('.test3').length).toEqual(0);
});
