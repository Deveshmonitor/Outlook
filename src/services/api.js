// src/services/api.js

// Fetch all emails for a specific page
export const fetchEmails = async (page = 1) => {
    const response = await fetch(`https://flipkart-email-mock.now.sh/?page=${page}`);
    if (!response.ok) throw new Error('Failed to fetch emails');
    return await response.json();
  };
  
  // Fetch email body by ID
  export const fetchEmailBody = async (id) => {
    const response = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`);
    if (!response.ok) throw new Error('Failed to fetch email body');
    return await response.json();
  };
  