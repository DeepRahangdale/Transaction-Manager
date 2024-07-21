import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionItem from './TransactionItem';
import AddEditTransactionModal from './AddEditTransactionModal';
import { Transaction } from '../types';

const TransactionList: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedTransaction(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      >
        Add Transaction
      </button>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onEdit={() => handleEdit(transaction)}
        />
      ))}
      {isModalOpen && (
        <AddEditTransactionModal
          transaction={selectedTransaction!}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TransactionList;
