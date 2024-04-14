import React from 'react'
import {data} from '@/utils/data'
import ProductCard from './ProductCard';
const Marketplace = () => {
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className='flex flex-wrap pt-16 px-10 padding-x'>
            {
                data.map((product) => {
                    return (
                        <ProductCard key={product.id} data={product}/>                        )
                    })
            }
        </div>
    </div>
  )
}

export default Marketplace