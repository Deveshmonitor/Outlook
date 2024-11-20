// src/components/EmailList.jsx

import React from "react";

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 p-4">
      {emails.map((email) => (
        <div
          key={email.id}
          className={`p-4 border-b ${
            email.read ? "bg-gray-200" : "bg-white"
          } hover:bg-blue-50 cursor-pointer`}
          onClick={() => onSelectEmail(email.id)}
        >
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full  bg-pink-600 flex capitalize items-center justify-center text-white font-bold">
              {email.from.name[0]}
            </div>
            <div className="ml-4">
              <p className="font-bold">From: {email.from.email}</p>
              <p className="font-bold">Subject: {email.subject}</p>
              <p className="text-sm text-gray-500 line-clamp-1">
                {email.short_description}
              </p>
              <p className="text-xs text-gray-400 mt-2">
            {new Date(email.date).toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
            </div>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default EmailList;
