import Immutable from "immutable";
import { createSelector } from "reselect";
import {abbreviateNumber} from '../utils/abbreviateNumber';

export const updateValueAction = "UPDATE_VALUE_ACTION";

export default (state = Immutable.fromJS({}), action) => {
  const { type, value, index } = action;
  switch (type) {
    case updateValueAction:
      return state.setIn([index, "value"], value);
    default:
      return state;
  }
};

export const updateValues = (value, index) => ({
  type: updateValueAction,
  value,
  index
});

export const getInputValues = state => state.get("inputs").map(i => i.get("value"));
export const sumSelector = createSelector([getInputValues], values =>
  abbreviateNumber(
    values.reduce((ac, el) => {
      return ac + (parseInt(el) || 0);
    }, 0)
  )
);
