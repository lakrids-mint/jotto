import React from "react";
import { connect } from "react-redux";

const Input = props => {
  const content = props.success ? null : (
    <form className="form-inline">
      <input
        data-test="input-box"
        type="text"
        placeholder="Enter guess"
        className="mb-2 mx-sm-3"
        id="word-guess"
      />
      <button
        type="submit"
        data-test="submit-button"
        className="btn btn-primary mb-2"
      >
        Submit
      </button>
    </form>
  );
  return <div data-test="component-input">{content}</div>;
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
