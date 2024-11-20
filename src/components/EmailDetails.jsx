// src/components/EmailDetails.jsx

import React from 'react';

const EmailDetails = ({ email, onFavorite }) => {
  if (!email) return <p className="p-4">Select an email to view details.</p>;

  return (
    <div className="w-full h-full bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">{email.subject}</h1>
      <p className="text-gray-700 mb-6">{email.body}</p>
      <p className="text-gray-500 text-sm">
        {new Date(email.date).toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
      </p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={onFavorite}
      >
        Mark as Favorite
      </button>
    </div>
  );
};

export default EmailDetails;
