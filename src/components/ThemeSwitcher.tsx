import React from 'react';

const ThemeSwitcher: React.FC = () => {
  const handleThemeChange = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={handleThemeChange}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
