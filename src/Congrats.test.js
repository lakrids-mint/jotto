import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { findByTestAttr } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/* Factory function to crate a shallowWrapper for the Congrats component
 * @function setup
 * @params {object} props
 * @returns {shallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without errer", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when succes prop is false", () => {
  const wrapper = setup({ succes: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non empty congrats message when succes prop is true", () => {
  const wrapper = setup({ succes: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
