import { combineReducers } from '@reduxjs/toolkit';
import { favouriteChoice } from './favouriteChoice';
import playerChoices from './playerChoices';
import loginSlice from './loginSlice';

const rootReducer = combineReducers({
  favourites: favouriteChoice,
  player: playerChoices,
  login: loginSlice,
});

export default rootReducer;
