# Everlook React Boilerplate

This is a base configuration to start with React projects.

## Setup

### Through Everlook CLI

_Coming soon_

### Through Git

`$ git clone https://github.com/EverlookSoftware/react-boilerplate.git`

## Commands

### `npm start`

Runs the app in development mode.
Open http://localhost:8080 to view it in the browser.

Development mode comes with hot module reloading so the browser will automatically reload to changes with your code.

Any build errors will appear in the browser or console.

#### Linting

The project is linted through [AirBnB](https://github.com/airbnb/javascript).  Test files are ignored.

### `npm t` or `npm test`

Runs the tests for your application.

The Everlook Boilerplate utilizes [Jest](https://jestjs.io/docs/en/getting-started) and [Enzyme](https://airbnb.io/enzyme/) for unit and snapshot testing.

By default, it will look for any folder called `__tests__` within the `src/` directory.

### `npm run build`

Builds the application for production.

## Philosophy

- **Quick Start:** Get started writing your React application as soon as possible without having to worry about build process woes.
- **Just Enough:** Enough build process built for you to get you started, but open enough for you to implement whatever else you want on top without fear of "ejecting".

## What's Included?

- React, JSX, ES6 Support.
- [Tailwind](https://tailwindcss.com/docs/what-is-tailwind/) utility-first CSS framework.
- Live development server with HMR and error outputs.
- AirBnB JavaScript style linting.
- Autoprefixed CSS.
- Unit tests with coverage reports.

## Architecture

### `config/`

The `config/` directory holds all the Webpack configuration files.

- `webpack.config.js` contains all the general Webpack settings and common plugins to use across dev and build pipelines.
- `webpack.dev.js` contains development specific settings.
- `webpack.prod.js` contains production specific settings.

### `src/`

The `src/` directory contains all the source code for your application as well as any unit tests.  Jest will scan for any directory called `__tests__` for tests.

- `components/` base component folder.
- `App.css` root CSS file.
- `App.jsx` application root React component.
- `index.js` application root.
- `setupTests.js` file to setup testing environment and Enzyme.

### `static/`

Holds any static files for your application and the `index.html` file the application uses.
