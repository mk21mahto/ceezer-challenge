'use client'
import React from 'react';
import { useAppContext } from '../context/CartData';
import Image from 'next/image';
import { CartItem } from '@/utils/types';

const Cart: React.FC = () => {
  const { cartItem, setCartItem } = useAppContext();

  // Function to calculate total amount to pay
  const totalPrice: number = cartItem.reduce((acc: number, currentItem: CartItem) => {
    const productTotal: number = currentItem.basePrice * currentItem.quantity;
    return acc + productTotal;
  }, 0);

  // Function to remove an item from the cart based on its name
  const removeItem = (productName: string): void => {
    const updatedCart: CartItem[] = cartItem.filter((item: CartItem) => item.name !== productName);
    setCartItem(updatedCart);
  };

  // Function to update the quantity of the product
  const updateQuantity = (productName: string, newQuantity: number): void => {
    const updatedCart: CartItem[] = cartItem.map((item: CartItem) => {
      if (item.name === productName) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItem(updatedCart);
  };

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-16 padding-x mx-5'>
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="text-lg font-medium text-gray-900">
            Shopping cart
          </div>
          <div className="mt-8">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItem.map((item: CartItem) => (
                <li key={item.name} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={item.image}
                      alt='image'
                      width={100}
                      height={50}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.supplier} - {item.name}</h3>
                        <p className="ml-4">EUR {item.basePrice * item.quantity}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Earliest Delivery: {item.deliveryDate}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">{'Qty: '}
                        <input
                          value={item.quantity}
                          className='w-6 border'
                          onChange={(e) => { updateQuantity(item.name, parseInt(e.target.value)) }}
                        />
                      </p>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => { removeItem(item.name) }}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>EUR {totalPrice}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p> or{' '}
              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
