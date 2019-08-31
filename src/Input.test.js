import React from "react";
import Input, { UnconnectedInput } from "./Input";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe("rendering", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button ", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("render component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does NOT render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does NOT render submit button ", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    console.log(wrapper.debug());
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("`guessWord` action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("action creators", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";
  beforeEach(() => {
    guessWordMock = jest.fn();
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

    wrapper.instance().inputBox.current = { value: guessedWord };

    const button = findByTestAttr(wrapper, "submit-button");
    button.simulate("click", { preventDeafault() {} });
  });
  test("action creator runs on submit click", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
  test("action creator runs with correct args", () => {
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });
});
