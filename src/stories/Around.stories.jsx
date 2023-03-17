import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RelatedHits from '../components/RelatedHits';
import { store } from '../redux/store';
import '../index.css';

export default {
  title: ' RelatedHits',
  component: RelatedHits,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}> <Provider store={store}>{Story()}</Provider> </MemoryRouter>,
  ],
};

export const Basic = () => (
  <RelatedHits />
);
Basic.storyName = 'Default';
