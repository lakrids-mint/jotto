import { actionTypes } from "../actions";
import succesReducer from "./succesReducer";

test("returns initial deafult state of false when no action is passed", () => {
  const newState = succesReducer(undefined, {});
  expect(newState).toBe(false);
});
test("returns state of true when action of type CORRECT_GUESS is passed", () => {
  const newState = succesReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
