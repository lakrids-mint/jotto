import { combineReducers } from "redux";
import success from "./succesReducer";
import guessedWords from "./guessedWordReducer";

export default combineReducers({
  success,
  guessedWords
});
