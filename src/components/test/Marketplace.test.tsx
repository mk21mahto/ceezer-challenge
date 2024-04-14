import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Marketplace from '@/components/Marketplace';
import { act } from 'react-dom/test-utils';

// Mock data for testing
const MOCK_DATA = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

// Mock fetch function to resolve with mock data
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }) as unknown as Promise<Response>
);

describe('Marketplace component', () => {
  it('loads Marketplace component and performs actions', async () => {
    await act(async () =>
      render(
        <Marketplace />
      )
    );

    // Perform actions on the rendered component
    const searchInput = screen.getByPlaceholderText('Search a product');
    fireEvent.change(searchInput, { target: { value: 'Product' } });

    const products = screen.getAllByTestId('product-card');
    expect(products.length).toBe(3); // Replace 3 with the expected number of products
  });
});
