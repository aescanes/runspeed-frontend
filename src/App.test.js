import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import App from './App';

test('renders input pace', () => {
  const dom = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const inputPace = getById(dom.container, 'pace');
  expect(inputPace).toBeInTheDocument();
});

test('renders input speed', () => {
  const dom = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  const inputPace = getById(dom.container, 'speed');
  expect(inputPace).toBeInTheDocument();
});
