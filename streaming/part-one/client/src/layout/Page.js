import React from 'react';

const Page = ({ children }) => (
  <div className="flex items-center min-h-screen font-sans bg-gray-200">
    <div className="container mx-auto text-center">
      {children}
    </div>
  </div>
);

export default Page;
