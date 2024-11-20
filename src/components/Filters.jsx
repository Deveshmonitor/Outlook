// src/components/Filters.jsx
import React from 'react';

const Filters = ({ onFilterChange }) => {
  const handleFilterChange = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h3 className="text-lg font-semibold mb-2">Filters</h3>
      <button
        className="bg-green-500 text-white py-1 px-3 rounded mr-2"
        onClick={() => handleFilterChange('favorites')}
      >
        Favorites
      </button>
      <button
        className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
        onClick={() => handleFilterChange('read')}
      >
        Read
      </button>
      <button
        className="bg-red-500 text-white py-1 px-3 rounded"
        onClick={() => handleFilterChange('unread')}
      >
        Unread
      </button>
    </div>
  );
};

export default Filters;
