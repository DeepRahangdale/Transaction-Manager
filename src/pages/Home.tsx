import React from 'react';
import FilterBar from '../components/FilterBar';
import TransactionList from '../components/TransactionList';

const Home: React.FC = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold absolute top-4 left-4 
        text-gray-800 dark:text-gray-200 "
      >Transaction Manager</h1>
      <div className="items-center mt-20">
      <FilterBar />
      <TransactionList />
      </div>
    </div>
  );
};

export default Home;
