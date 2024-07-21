import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const FilterBar: React.FC = () => {
  const { dispatch } = useContext(TransactionContext);
  const [filter, setFilter] = useState({ category: '', currency: '', title: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSearch = () => {
    dispatch({ type: 'FILTER_TRANSACTIONS', payload: filter });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
      <input
        type="text"
        name="title"
        placeholder="Search by title"
        value={filter.title}
        onChange={handleInputChange}
        className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
      />
      <select
        name="category"
        value={filter.category}
        onChange={handleInputChange}
        className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
      >
        <option value="">All Categories</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <input
        type="text"
        name="currency"
        placeholder="Currency"
        value={filter.currency}
        onChange={handleInputChange}
        className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      >
        Search
      </button>
    </div>
  );
};

export default FilterBar;
