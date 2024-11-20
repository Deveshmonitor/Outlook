// src/App.jsx

import React, { useState, useEffect } from 'react';
import EmailList from './components/EmailList';
import EmailDetails from './components/EmailDetails';
import Filters from './components/Filters';
import { fetchEmails, fetchEmailBody } from './services/api';

function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filters, setFilters] = useState(() => () => true);
  const [currentPage, setCurrentPage] = useState(1);

  // Load emails and persisted state on component mount
  useEffect(() => {
    const loadEmails = async () => {
      const { list } = await fetchEmails(currentPage);
      const savedEmails = JSON.parse(localStorage.getItem('emails')) || [];
      const updatedEmails = list.map((email) => {
        const savedEmail = savedEmails.find((e) => e.id === email.id);
        return savedEmail ? { ...email, ...savedEmail } : email;
      });
      setEmails((prevEmails) => [...prevEmails, ...updatedEmails]);
    };
    loadEmails();
  }, [currentPage]);

  // Save emails to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('emails', JSON.stringify(emails));
  }, [emails]);

  const handleSelectEmail = async (id) => {
    const email = await fetchEmailBody(id);
    setSelectedEmail(email);

    // Mark email as read
    setEmails((prevEmails) =>
      prevEmails.map((e) =>
        e.id === id ? { ...e, read: true } : e
      )
    );
  };

  const handleFilterChange = (filter) => {
    setFilters(() =>
      filter === 'favorites'
        ? (email) => email.favorite === true
        : filter === 'read'
        ? (email) => email.read === true
        : filter === 'unread'
        ? (email) => email.read === false
        : () => true // Default fallback
    );
  };
  


  const handleFavorite = (id) => {
    setEmails((prevEmails) =>
      prevEmails.map((e) =>
        e.id === id ? { ...e, favorite: true } : e
      )
    );
  };


  useEffect(() => {
    const savedFilter = localStorage.getItem('selectedFilter') || 'all';
    handleFilterChange(savedFilter);
  }, []);

  

  const loadNextPage = () => setCurrentPage((prevPage) => prevPage + 1);

  return (
    <div className="flex h-screen">
      {/* Email List and Filters */}
      <div className="w-1/3">
        <Filters onFilterChange={handleFilterChange} />
        <EmailList
          emails={emails.filter(filters)}
          onSelectEmail={handleSelectEmail}
        />
        <button
          className="mt-4 bg-gray-800 text-white py-2 px-4 rounded w-full"
          onClick={loadNextPage}
        >
          Load More
        </button>
      </div>

      {/* Email Details */}
      <div className="w-2/3">
        <EmailDetails
          email={selectedEmail}
          onFavorite={() => handleFavorite(selectedEmail.id)}
        />
      </div>
    </div>
  );
}

export default App;
