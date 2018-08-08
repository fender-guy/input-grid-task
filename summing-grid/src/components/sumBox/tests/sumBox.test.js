import React from 'react';
import { mount } from "enzyme";
import {SumBox} from '../index';
import {GridBox} from '../../common/GridBox';

let wrapper;

beforeEach(() => {
    wrapper = mount(<SumBox />);
});

test('should mount component', () => {
    expect(wrapper.find(SumBox)).toExist();
});

test('should contain GridBox', () => {
    expect(wrapper.find(GridBox)).toExist();
});

test('display the sum', () => {
    wrapper = mount(<SumBox sum={55} />);
    expect(wrapper.props().sum).toEqual(55);
    expect(wrapper.find('div').at(1).text()).toEqual('55');
});