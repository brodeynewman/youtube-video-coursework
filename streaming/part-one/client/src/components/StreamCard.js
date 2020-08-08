import React from 'react';

const StreamCard = () => (
  <div className="flex max-w-md mx-4 mt-2 bg-white rounded-lg shadow-lg cursor-pointer md:mx-auto md:max-w-xl">
    <div className="flex items-start px-4 py-6">
      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="-mt-1 text-lg font-semibold text-gray-900">
            React Tech Talk
          </h2>
          <small className="text-sm text-gray-700">22h ago</small>
        </div>
        <p className="table px-2 py-1 mt-2 text-xs text-blue-800 bg-blue-200 rounded">Software Engineering</p>
        <p className="mt-3 text-sm text-gray-700">
          We are going to be building a full-stack javascript app using ReactJS and NodeJS!
        </p>
      </div>
    </div>
  </div>
);

export default StreamCard;
