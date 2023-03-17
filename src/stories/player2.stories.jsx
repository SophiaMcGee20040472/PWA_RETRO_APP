import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Player3 from '../PlayerOptions/Player3';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: 'Player2',
  component: Player3,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <Player3 />
);
Basic.storyName = 'Default';