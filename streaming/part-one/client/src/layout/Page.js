import React from 'react';

import Header from '../components/Header';

const Page = ({ children }) => (
  <div classNameName="flex items-center min-h-screen font-sans bg-grey-200">
    <div classNameName="container mx-auto text-center">
      <Header />

      {children}
    </div>
  </div>
);

export default Page;
