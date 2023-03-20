import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Signup from '../pages/Signup';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: 'Signup',
  component: Signup,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <Signup />
);
Basic.storyName = 'Default';
