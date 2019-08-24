/* Returns node(s) with the given data-test attributes
 * @param
 * @param
 * @returns
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
