import React from 'react';
import UnitConverter from './pages/UnitConverter';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <header className="p-4 shadow-md bg-white dark:bg-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">UnitMaster 🚀</h1>
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        >
          Toggle Theme
        </button>
      </header>

      <main className="p-4 max-w-xl mx-auto">
        <UnitConverter />
      </main>
    </div>
  );
}

export default App;