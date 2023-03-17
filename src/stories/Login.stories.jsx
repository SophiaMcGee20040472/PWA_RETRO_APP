import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../pages/Login';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: 'Login',
  component: Login,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <Login />
);
Basic.storyName = 'Default';