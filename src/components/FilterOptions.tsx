import React, { useState } from 'react';
import filterOptions from '@/utils/filterOptions';
import { AdvanceFilter, FilterOptionsProps } from '@/utils/types';

const FilterOptions: React.FC<FilterOptionsProps> = ({ applyFilters }) => {
  const [advanceFilter, setAdvanceFilter] = useState<AdvanceFilter>({
    suppliers: [],
    countries: []
  });

  const getFilteredData = (e: React.ChangeEvent<HTMLInputElement>, value: string, category: string) => {
    const { checked } = e.target;

    if (category === "Supplier") {
      setAdvanceFilter(prevFilters => ({
        ...prevFilters,
        suppliers: checked ? [...prevFilters.suppliers, value] : prevFilters.suppliers.filter(s => s !== value)
      }));
    } else if (category === "Country") {
      setAdvanceFilter(prevFilters => ({
        ...prevFilters,
        countries: checked ? [...prevFilters.countries, value] : prevFilters.countries.filter(c => c !== value)
      }));
    }
  };

  const handleApplyFilters = () => {
    applyFilters(advanceFilter);
  };

  return (
    <div className='mt-5'>
      {
        filterOptions.map((option) => {
          return (
            <div key={option.title}>
              <div className='font-bold mb-1'>{option.title}</div>
              {
                option.options.map((box, index) => {
                  return (
                    <div key={index}>
                      <div className="flex items-center mb-4">
                        <input id={`checkbox-${option.title}-${index}`} type="checkbox" value="" onChange={(e) => { getFilteredData(e, box, option.title) }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label htmlFor={`checkbox-${option.title}-${index}`} className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-700">{box}</label>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
      <button onClick={handleApplyFilters} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Apply</button>
    </div>
  );
};

export default FilterOptions;
