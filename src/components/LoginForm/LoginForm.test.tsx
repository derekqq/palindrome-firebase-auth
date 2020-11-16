import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LoginForm from './LoginForm';

describe.only('Login From', () => {
  test('should watch input correctly', async () => {
    const { getByTestId, queryByText } = render(<LoginForm />);

    fireEvent.input(getByTestId('login'), {
      target: {
        value: 'test@test.com',
      },
    });

    expect(queryByText('Field email is required')).toBeNull();
  });

  test('should display correct error message', () => {
    const { getByTestId, queryAllByText } = render(<LoginForm />);

    getByTestId('submit');

    fireEvent.click(getByTestId('submit'));

    queryAllByText('This field is required');
  });

  test('should does not display error message, when two fields are not empty', () => {
    const { getByTestId, queryAllByText } = render(<LoginForm />);

    fireEvent.input(getByTestId('login'), {
      target: {
        value: 'test@test.com',
      },
    });

    fireEvent.input(getByTestId('password'), {
      target: {
        value: 'testpassword',
      },
    });

    getByTestId('submit');

    fireEvent.click(getByTestId('submit'));

    queryAllByText('This field is required');
  });
});
