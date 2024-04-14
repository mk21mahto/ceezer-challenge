import React, { useState } from 'react';
import filterOptions from '@/utils/filterOptions';

type AdvanceFilter = {
    suppliers: string[];
    countries: string[];
  }

const FilterOptions = ({ applyFilters }) => {
  const [advanceFilter, setAdvanceFilter] = useState<AdvanceFilter>({
    suppliers: [],
    countries: []
  });

  const getFilteredData = (e, value, category) => {
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
              <div>{option.title}</div>
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
      <button onClick={handleApplyFilters}>Apply</button>
    </div>
  );
};

export default FilterOptions;
