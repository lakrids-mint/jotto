import React from "react";

const Congrats = ({ succes }) => {
  return succes ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">Congrats!</span>
    </div>
  ) : (
    <div data-test="component-congrats"></div>
  );
};

export default Congrats;
