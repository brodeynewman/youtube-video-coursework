import React from 'react';

const Header = () => (
  <nav className="flex flex-wrap items-center p-3 bg-gray-800">
    <button
      type="button"
      className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-gray-900 lg:hidden hover:text-white nav-toggler"
    >
      <i className="material-icons">menu</i>
    </button>
    <div
      className="hidden w-full top-navbar lg:inline-flex lg:flex-grow lg:w-auto"
      id="navigation"
    >
      <div
        className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto"
      >
        <a
          href="/"
          className="items-center justify-center w-full px-3 py-2 text-gray-400 rounded lg:inline-flex lg:w-auto hover:bg-gray-900 hover:text-white"
        >
          <span>Contact Us</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
