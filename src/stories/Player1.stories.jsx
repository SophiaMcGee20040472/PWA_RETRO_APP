import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Player1 from '../PlayerOptions/Player1';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: 'Player1',
  component: Player1,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <Player1 />
);
Basic.storyName = 'Default';