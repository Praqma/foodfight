import React from 'react';

import { render } from '@testing-library/react';
import App from './App'
import { Provider } from 'react-redux'
import createStore from './redux/store.js'

describe('foodstuff reducer', () => {
  it('renders My Food', () => {
    const { getByText }   = render(
      <Provider store={createStore}><App/></Provider>
    )
    const h1 = getByText(/My food/i);
    expect(h1).toBeInTheDocument();
  });
});
