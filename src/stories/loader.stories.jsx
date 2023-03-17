import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loader from '../components/Loader';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: 'Loader',
  component: Loader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <Loader />
);
Basic.storyName = 'Default';
