import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  const guessedWordsRows = props.guessedWords.map((word, index) => {
    return (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    );
  });
  return (
    <div data-test="component-guessed-word">
      {props.guessedWords.length === 0 ? (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      ) : (
        <div data-test="guessed-words">
          <h3>Guessed words</h3>
          <table className="table table-sm">
            <thead>
              <tr>
                <th className="thead-light">Guess</th>
                <th>Matching letters</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
export default GuessedWords;
