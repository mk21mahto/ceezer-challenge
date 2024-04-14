import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';

// Mock useAppContext hook
jest.mock('@/app/context/CartData', () => ({
  useAppContext: () => ({ cartItem: [] }), // Mock the return value of useAppContext
}));

describe('Navbar component', () => {
  it('renders logo and cart link without count if cart is empty', () => {
    render(<Navbar />);

    // Assert logo is rendered
    const logo = screen.getByAltText('Ceezer Logo');
    expect(logo).toBeInTheDocument();

    // Assert cart link is rendered without count
    const cartLink = screen.getByRole('link', { name: /cart/i });
    expect(cartLink).toBeInTheDocument();
  });

  it('renders cart link with correct cart item count', () => {
    // Mock useAppContext to return cart with items

    render(<Navbar />);

    // Assert cart link is rendered with correct cart item count
    const cartLink = screen.getByRole('link', { name: /cart \(1\)/i });
    expect(cartLink).toBeInTheDocument(); 
  });
});
