import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Player from '../PlayerOptions/Player';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: 'Player',
  component: Player,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <Player />
);
Basic.storyName = 'Default';