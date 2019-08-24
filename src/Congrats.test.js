import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../test/testUtils";

const defaultProps = { success: false };
/* Factory function to crate a shallowWrapper for the Congrats component
 * @function setup
 * @params {object} props
 * @returns {shallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without errer", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when succes prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non empty congrats message when succes prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
test("does not throw warning with expected prop types", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
