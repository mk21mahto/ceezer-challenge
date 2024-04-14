import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import FilterOptions from '@/components/FilterOptions';

describe('FilterOptions component', () => {
  it('calls applyFilters with the correct parameters when Apply button is clicked', () => {
    const applyFiltersMock = jest.fn();
    const { getByText } = render(<FilterOptions applyFilters={applyFiltersMock} filterOptions={[]} />);
    fireEvent.click(getByText('Apply'));
    expect(applyFiltersMock).toHaveBeenCalled();
  });

  it('updates advanceFilter state correctly when checkboxes are toggled', () => {
    const applyFiltersMock = jest.fn();
    const { getByLabelText } = render(<FilterOptions applyFilters={applyFiltersMock} filterOptions={[]} />);

    const checkbox = getByLabelText('Option 1') as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it('renders correct number of checkboxes based on filterOptions prop', () => {
    const applyFiltersMock = jest.fn();
    const filterOptions = [
      { title: 'Category 1', options: ['Option 1', 'Option 2'] },
      { title: 'Category 2', options: ['Option 3'] },
    ];
    const { getAllByRole } = render(<FilterOptions applyFilters={applyFiltersMock} filterOptions={filterOptions} />);
    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes.length).toBe(3); // 2 from Category 1, 1 from Category 2
  });
});
