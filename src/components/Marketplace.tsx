'use client'
import React, { useState } from 'react';
import { data } from '@/utils/data';
import ProductCard from './ProductCard';
import FilterOptions from './FilterOptions';

const Marketplace = () => {
  const [searchedProduct, setSearchedProduct] = useState('');
  const [productList, setProductList] = useState(data);

  const applyFilters = (filters: { suppliers: string[]; countries: string[] }) => {
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

    setProductList(filteredData);
  };

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex pt-16 padding-x'>
        <div className='mr-5'>
          <div className='search'>
            <input type="text" placeholder="Search a product" value={searchedProduct} className='border border-gray-200' onChange={(e) => { setSearchedProduct(e.target.value) }}></input>
          </div>
          <FilterOptions applyFilters={applyFilters} filterOptions={[]} />
        </div>
        <div>
          <div className='font-bold mb-2'>Projects</div>
          <div className='flex flex-wrap'>
            {
              productList.map((product) => {
                return (
                  <ProductCard key={product.id} product={product} />)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace;
