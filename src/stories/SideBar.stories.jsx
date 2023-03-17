import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SideBar from '../components/SideBar';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: 'SideBar',
  component: SideBar,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <SideBar />
);
Basic.storyName = 'Default';
