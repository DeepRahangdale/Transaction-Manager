import React from 'react';
import FilterBar from '../components/FilterBar';
import TransactionList from '../components/TransactionList';

const Home: React.FC = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Transaction Manager</h1>
      <FilterBar />
      <TransactionList />
    </div>
  );
};

export default Home;
