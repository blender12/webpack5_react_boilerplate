import React from 'react';
import '@testing-library/jest-dom'
import {fireEvent, render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './A.jsx';
import { expect, test } from '@jest/globals';

describe('Search', () => {
    test('calls the onChange callback handler', () => {
      const ontro = jest.fn();
   
      render(
        <App value="" onC={ontro}>
          Search:
        </App>
      );
   
      fireEvent.click(screen.getByRole('button'));
      expect(ontro).toHaveBeenCalledTimes(1);
      expect(screen.getByText('BOLO')).toBeInTheDocument()
    });
  });