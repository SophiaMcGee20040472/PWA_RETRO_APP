import { configureStore } from '@reduxjs/toolkit';

import playerChoices from './features/playerChoices.js';

export const store = configureStore({
  reducer: {
    player: playerChoices,
  },
});