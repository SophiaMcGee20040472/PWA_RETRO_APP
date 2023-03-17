import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PlayBar from '../PlayerOptions/PlayBar';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: 'PlayBar',
  component: PlayBar,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <PlayBar />
);
Basic.storyName = 'Default';