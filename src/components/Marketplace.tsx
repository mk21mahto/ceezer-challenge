'use client'
import React, { useState } from 'react';
import { data } from '@/utils/data';
import ProductCard from './ProductCard';
import FilterOptions from './FilterOptions';

const Marketplace = () => {
  const [searchedProduct, setSearchedProduct] = useState('');
  const [item, setItems] = useState(data);

  const applyFilters = (filters) => {
    let filteredData = [...data];

    if (filters.suppliers.length > 0) {
      filteredData = filteredData.filter(product => filters.suppliers.includes(product.supplier_name));
    }

    if (filters.countries.length > 0) {
      filteredData = filteredData.filter(product => filters.countries.includes(product.country));
    }

    if (searchedProduct.trim() !== '') {
      filteredData = filteredData.filter(product => product.name.toLowerCase().includes(searchedProduct.toLowerCase()));
    }

    setItems(filteredData);
  };

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex pt-16 padding-x'>
        <div className='mr-5'>
          <div className='search'>
            <input type="text" placeholder="Search a product" value={searchedProduct} className='border border-gray-200' onChange={(e) => { setSearchedProduct(e.target.value) }}></input>
          </div>
          <FilterOptions applyFilters={applyFilters} />
        </div>
        <div className='flex flex-wrap'>
          {
            item.map((product) => {
              return (
                <ProductCard key={product.id} data={product} />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Marketplace;
