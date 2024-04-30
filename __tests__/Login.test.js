import React from 'react';
import { render } from '@testing-library/react-native';
import Login from '../src/Login/Login';

jest.useFakeTimers();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'), // Use the actual implementation
  useNavigation: jest.fn(), // Mock useNavigation hook
}));

test('renders correctly', () => {
  const { toJSON } = render(<Login />);
  expect(toJSON()).toMatchSnapshot();
});
