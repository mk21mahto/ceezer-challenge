import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Cart from '@/app/cart/page';
import { useAppContext } from '@/app/context/CartData';

// Mock useAppContext hook
jest.mock('@/app/context/CartData', () => ({
  useAppContext: jest.fn().mockReturnValue({
    cartItem: [
      {
        name: 'Product 1',
        supplier: 'Supplier 1',
        basePrice: 100,
        deliveryDate: '2024-04-25',
        image: '/path/to/image.png',
        quantity: 2,
      },
      {
        name: 'Product 2',
        supplier: 'Supplier 2',
        basePrice: 200,
        deliveryDate: '2024-04-26',
        image: '/path/to/image.png',
        quantity: 3,
      },
    ],
    setCartItem: jest.fn(),
  }),
}));

describe('Cart component', () => {
  it('renders cart items and handles removeItem and updateQuantity correctly', () => {
    render(<Cart />);

    // Assert cart items are rendered
    expect(screen.getByText('Product 1 - Supplier 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2 - Supplier 2')).toBeInTheDocument();

    // Simulate change and click on removeItem button
    fireEvent.click(screen.getAllByText('Remove')[0]);

    // Assert that removeItem function is called
    expect(useAppContext().setCartItem).toHaveBeenCalledWith([
      {
        name: 'Product 2',
        supplier: 'Supplier 2',
        basePrice: 200,
        deliveryDate: '2024-04-26',
        image: '/path/to/image.png',
        quantity: 3,
      },
    ]);

    // Simulate change and click on updateQuantity button
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: '5' } });

    // Assert that updateQuantity function is called
    expect(useAppContext().setCartItem).toHaveBeenCalledWith([
      {
        name: 'Product 2',
        supplier: 'Supplier 2',
        basePrice: 200,
        deliveryDate: '2024-04-26',
        image: '/path/to/image.png',
        quantity: 5,
      },
    ]);
  });
});
