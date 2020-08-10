// Higher order functions are ways of wrapping funtions in order to create re-usable logic.

// Typical naming convention for these functions are 'withX` like `withGreeting` or `withErrorHandling`.
// The same naming convention applies in React with Higher Order Components.

const throwWithError = (statusCode, err) => customError => (
  throw Object.assign(new Error, {
    code: statusCode,
    message: customError || err,
  }));

const throwHttpNotFound = throwWithError(404, 'Resource not found');

const getSingleUser = async (request, response) => {
  const { id } = request.params;

  const user = await DB.find({ id });

  if (!user) {
    throwHttpNotFound();
  }

  response.status(200).json(user);
}

const withErrorHandling = fn => async (request, response) => {
  try {
    await fn(request, response);
  } catch (e) {
    // this code & message are configured wherever the error is thrown.
    const { code, message } = e;

    console.log(message);

    response.status(code).send(message);
  }
};

const getSingleUserWithErrorHandling = withErrorHandling(getSingleUser);

app.get('/user/:id', getSingleUserWithErrorHandling);
