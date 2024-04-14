import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { AppWrapper, useAppContext } from '@/app/context/CartData';

describe('AppContext', () => {
  it('provides cartItem and setCartItem via context', () => {
    const TestComponent = () => {
      const { cartItem, setCartItem } = useAppContext();
      return (
        <div>
          <span data-testid="cartItemLength">{cartItem.length}</span>
          <button onClick={() => setCartItem([{ id: 1, name: 'Product 1' }])}>Add to Cart</button>
        </div>
      );
    };

    render(
      <AppWrapper>
        <TestComponent />
      </AppWrapper>
    );

    // Assert initial cartItem length
    expect(screen.getByTestId('cartItemLength')).toHaveTextContent('0');

    // Simulate clicking the button to add an item to the cart
    fireEvent.click(screen.getByText('Add to Cart'));

    // Assert updated cartItem length
    expect(screen.getByTestId('cartItemLength')).toHaveTextContent('1');
  });
});
