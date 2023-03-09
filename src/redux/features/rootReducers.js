import { combineReducers } from '@reduxjs/toolkit';
import { favouriteChoice } from './favouriteChoice';
import playerChoices from './playerChoices';

const rootReducer = combineReducers({
  favourites: favouriteChoice,
  player: playerChoices,
});

export default rootReducer;