'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useAppContext } from '@/app/context/CartData';
import { ProductCardProps } from '@/utils/types';

const ProductCard: React.FC<ProductCardProps>  = ({ product }) => {
    const { image, id, name, supplier_name: supplierName, country, description, offered_volume_in_tons: volume, price_per_ton: price, earliest_delivery: deliveryDate } = product;
    const { cartItem, setCartItem } = useAppContext();
    const [purchaseVolume, setPurchaseVolume] = useState(getQuantityByName(name));

    function getQuantityByName(itemName: string) {
        const item = cartItem.find((item) => item.name === itemName);
        return item ? item.quantity : '';
    }

    function addToCart() {
        const existingItemIndex = cartItem.findIndex((item) => item.name === name);

        if (existingItemIndex !== -1) {
            const updatedCartItem = [...cartItem];
            updatedCartItem[existingItemIndex].quantity = Number(purchaseVolume);
            setCartItem(updatedCartItem);
        } else {
            const newItem = {
                name,
                supplier: supplierName,
                basePrice: price * volume,
                deliveryDate,
                image,
                quantity: Number(purchaseVolume),
            };
            setCartItem([...cartItem, newItem]);
        }
    }

    return (
        <div className='border border-solid rounded-lg w-[300px]  mr-2 mb-2'>
            <div className='px-2 pt-1'>
                <div className='flex'>
                    <Image
                        src={image}
                        alt="Ceezer Logo"
                        width={100}
                        height={58}
                        priority={true}
                        className='object-contain'
                    />
                    <div className='side-row pl-4'>
                        <div className='text-xs'>{id}</div>
                        <div className='text-sm font-bold'>{name}</div>
                        <div className='flex justify-between'>
                            <div className='text-xs'>{supplierName}</div>
                            <div className=' flex text-xs'>
                                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                {country}
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-xs mt-2'>{description}</p>
                <hr className="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
                <div className='flex justify-between text-xs py-2'>
                    <div>Volume (t) : {volume}</div>
                    <div>Price (t) : {price}</div>
                </div>
            </div>
            <div className='bg-gray-200 py-2 flex justify-between'>
                <div className='flex'>
                    <div className='mx-2'>Purchase credits (t):</div>
                    <input value={purchaseVolume} className='w-10' onChange={(e) => { setPurchaseVolume(e.target.value) }} />
                </div>
                <button onClick={addToCart} className='mr-3'>
                    <svg className="h-5 w-5 text-gray-500 hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
