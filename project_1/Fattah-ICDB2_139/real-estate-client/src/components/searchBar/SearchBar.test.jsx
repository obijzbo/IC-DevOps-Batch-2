/* eslint-disable no-unused-vars */
import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';  // Adjust the path as needed

describe('SearchBar Component', () => {
  test('updates the query state when input fields change', () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    const cityInput = screen.getByPlaceholderText('City');
    const minPriceInput = screen.getByPlaceholderText('Min Price');
    const maxPriceInput = screen.getByPlaceholderText('Max Price');

    // Simulate input changes
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.change(minPriceInput, { target: { value: '1000' } });
    fireEvent.change(maxPriceInput, { target: { value: '5000' } });

    expect(cityInput.value).toBe('New York');
    expect(minPriceInput.value).toBe('1000');
    expect(maxPriceInput.value).toBe('5000');
  });
});