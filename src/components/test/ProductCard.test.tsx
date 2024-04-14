import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { useAppContext } from '@/app/context/CartData';

// Mock useAppContext hook
jest.mock('@/app/context/CartData', () => ({
  useAppContext: jest.fn().mockReturnValue({
    cartItem: [],
    setCartItem: jest.fn(),
  }), 
}));

describe('ProductCard component', () => {
  it('renders product details and handles addToCart correctly', () => {
    const product = {
      id: 1,
      name: 'Product 1',
      supplier_name: 'Supplier 1',
      country: 'Country 1',
      description: 'Description 1',
      offered_volume_in_tons: 10,
      price_per_ton: 100,
      earliest_delivery: '2024-04-25',
      image: '/path/to/image.png',
    };

    render(<ProductCard product={product} />);

    // Assert product details are rendered
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.supplier_name)).toBeInTheDocument();
    expect(screen.getByText(product.country)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText(`Volume (t) : ${product.offered_volume_in_tons}`)).toBeInTheDocument();
    expect(screen.getByText(`Price (t) : ${product.price_per_ton}`)).toBeInTheDocument();

    // Simulate change and click on addToCart button
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '5' } });
    fireEvent.click(screen.getByRole('button'));

    // Assert that addToCart function is called
    expect(useAppContext().setCartItem).toHaveBeenCalledWith([
      ...useAppContext().cartItem,
      {
        name: product.name,
        supplier: product.supplier_name,
        basePrice: product.price_per_ton * 5,
        deliveryDate: product.earliest_delivery,
        image: product.image,
        quantity: 5,
      },
    ]);
  });
});
