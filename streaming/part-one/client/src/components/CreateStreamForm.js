import React, { useState } from 'react';

const CreateStreamForm = () => (
  <div className="max-w-xl p-4 m-auto bg-white rounded">
    <h1 className="text-2xl font-bold text-gray-700">Create Your Stream</h1>

    <div className="mt-8">
      <form className="w-full max-w-sm mx-auto">
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-full">
            <label className="block pr-4 mb-1 font-bold text-left text-gray-500 md:mb-0" htmlFor="name">
              Stream Name
              <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" placeholder="React Talk" />
            </label>
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-full">
            <label className="block pr-4 mb-1 font-bold text-left text-gray-500 md:mb-0" htmlFor="topic">
              Stream Topic
              <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="topic" type="text" placeholder="Software" />
            </label>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-full">
            <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" type="button">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default CreateStreamForm;
