import { correctGuess, actionTypes } from "./index";

describe("correct guess", () => {
  test("returns an action with type CORRECT_GUESS", () => {
    const action = correctGuess();
    //toBe is used for immutabal objects, toEqual = deep equal
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
