import React from 'react';
import Home from './pages/Home';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <ThemeSwitcher />
      <Home />
    </div>
  );
};

export default App;
