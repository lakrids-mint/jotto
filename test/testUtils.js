import checkPropTypes from "check-prop-types";
import rootReducer from "../src/reducers";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../src/configureStore";

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
/* Returns node(s) with the given data-test attributes
 * @param
 * @param
 * @returns
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, comformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    comformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
