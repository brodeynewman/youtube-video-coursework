const _ = require('lodash');
const fp = require('lodash/fp');

/**
 * <----- Function Composition ------>
 */

// adds by itself
const add = num => num + num;

// multiplys by itself
const multiply = num => num * num;

const addAndMultiply = fp.compose(multiply, add);

console.log(addAndMultiply(5));

// this will filter any non-truthy values from the array,
// and proceed to map over every item in the array while calling our
// 'addAndMultiply' function to add the number and then multiply it.
const filterTruthyAndMultiply = fp.compose(
  fp.map(addAndMultiply),
  fp.filter(Boolean),
);

console.log(filterTruthyAndMultiply([1, false, 2, null, 3, ''])); // => [ 4, 16, 36 ];
console.log(filterTruthyAndMultiply([3, null, null, null, 4])); // => [ 36, 64 ];

/**
 * <----- Point Free Syntax ------>
 */

const apiResponse = {
  data: {
    users: [{ id: 1, age: 33 }, { id: 2, age: 20 }, { id: 3, age: 71 }],
  },
};

// imperative, non point-free approach
const getUsersAbove21Imperatively = (response) => {
  const users = _.get(response, 'data.users');
  const aboveAge = [];
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 21) {
      aboveAge.push(users[i]);
    }
  }

  return aboveAge;
};

console.log(getUsersAbove21Imperatively(apiResponse));

// a better approach...
const VALID_AGE = 21; // avoid hardcoding constants;
const filterByAbove21NonPointFree = users => _.filter(users, user => user.age > VALID_AGE);

console.log(filterByAbove21NonPointFree(apiResponse.data.users));

// point free approach
const isAboveAge = user => user.age > VALID_AGE;

// describes functionality / flow while hiding implementation details.
const filterByAbove21PointFree = fp.filter(isAboveAge);

console.log(filterByAbove21PointFree(apiResponse.data.users));

// rewrritten with point-free / composition
const getUsersAbove21Declarative = fp.compose(
  fp.filter(isAboveAge),
  fp.get('data.users'),
);

console.log(getUsersAbove21Declarative(apiResponse));

/**
 * <----- Currying ------>
 */

const greeting = (greeting, name) => `${greeting}, ${name}!`;
const curriedGreeting = _.curry(greeting);

// curried functions for later re-use
const withHello = curriedGreeting('Hello');
const withHola = curriedGreeting('Hola');

const sayHello = fp.map(withHello);
const sayHola = fp.map(withHola);

console.log(sayHello(['John', 'Ashley', 'Joey', 'Amanda']));
console.log(sayHola(['John', 'Ashley', 'Joey', 'Amanda']));
