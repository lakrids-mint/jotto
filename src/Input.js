import { connect } from "react-redux";
import { guessWord } from "./actions";

import React, { Component } from "react";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }
  submitGuessedWord(e) {
    e.preventDeafault();

    const guessedWord = this.inputBox.current.value;
    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }
  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          ref={this.inputBox}
          type="text"
          placeholder="Enter guess"
          className="mb-2 mx-sm-3"
          id="word-guess"
        />
        <button
          type="submit"
          onClick={this.submitGuessedWord}
          data-test="submit-button"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedInput);
