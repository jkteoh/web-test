import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('header', () => {
  render(<App />);
  const headerElement = screen.queryAllByText(/MoneyLion/i);
  expect(headerElement[0]).toBeInTheDocument();
});
