import { combineReducers } from "redux";
import success from "./succesReducer";
import guessedWords from "./guessedWordReducer";
import secretWord from "./secretwordReducer";

export default combineReducers({
  success,
  guessedWords,
  secretWord
});
