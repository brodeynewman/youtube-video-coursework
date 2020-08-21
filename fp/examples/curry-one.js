const express = require('express');

/**
 * Utilities
 */
const withError = (code, message) => (optionalMessage = message) => {
  throw Object.assign(new Error(), {
    code,
    message: optionalMessage,
  });
}

const throwHttpServerError = withError(500, 'An internal server error occurred');
const throwHttpNotFound = withError(404, 'Resource not found');
const throwHttpBadRequest = withError(400, 'Bad Request');

const withErrorHandling = (callback) => async (request, response) => {
  try {
    await callback(request, response);
  } catch (e) {
    const { code, message } = e;

    response.status(code).json({
      code,
      message,
    });
  }
};

const getUsers = (request, response) => {
  const { shouldThrow } = request.query;

  if (shouldThrow) {
    throwHttpBadRequest('This is a bad request... sorry.');
  }

  response.json({ success: true });
};

const getUsersWithErrorHandling = withErrorHandling(getUsers);

/**
 * Server
 */
const app = express();

app.get('/users', getUsersWithErrorHandling);

app.listen(5000, () => console.log('App is listening...'));
