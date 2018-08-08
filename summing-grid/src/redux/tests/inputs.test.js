import reducer, {
  updateValueAction,
  getInputValues,
  sumSelector
} from "../inputs";
import Immutable from "immutable";
import defaultState from "../defaultState";

test("should return the initial state", () => {
  expect(reducer(Immutable.fromJS({ value: "" }), {})).toEqual(
    Immutable.fromJS({ value: "" })
  );
});

test("should handle update value action", () => {
  const defaults = defaultState.get("inputs");
  const expected = defaults.setIn([0, "value"], "22");

  expect(
    reducer(defaultState.get("inputs"), {
      type: updateValueAction,
      value: "22",
      index: 0
    })
  ).toEqual(expected);
});

test("should get input values", () => {
  const newDefault = defaultState.setIn(["inputs", 0, "value"], "11");
  expect(getInputValues(newDefault)).toEqual(Immutable.fromJS(["11", "", ""]));
});

test("should get the sum", () => {
  const newInput = defaultState.get('inputs').merge([
      {value: '1'},
      {value: '2'},
      {value: '3'}
  ]);
  const newDefault = defaultState.set('inputs', newInput);
  expect(sumSelector(newDefault)).toEqual(
    6
  )
});
