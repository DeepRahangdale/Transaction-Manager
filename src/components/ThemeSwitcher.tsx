import React, { useState, useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setDarkMode(true);
    }
  }, []);

  const handleThemeChange = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={handleThemeChange}
        className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
      >
        {darkMode ? (
          <svg className="h-5 w-5 text-yellow-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-8h1M4 12H3m15.364 6.364l-.707.707M6.343 6.343l-.707-.707M17.657 6.343l.707-.707M6.343 17.657l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-8h1M4 12H3m15.364 6.364l-.707.707M6.343 6.343l-.707-.707M17.657 6.343l.707-.707M6.343 17.657l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
        )}
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
