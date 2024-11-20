// src/components/Pagination.jsx

import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="btn bg-gray-500 hover:bg-gray-700"
        >
          Previous
        </button>
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="btn bg-blue-500 hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
