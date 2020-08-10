const fp = require('lodash/fp');

// point free syntax is a way of describing your control flow while hiding implementation details.
// It's basically the foundation for writing more declarative programming.

// non point-free approach.

const users = [{ id: 1, age: 33 }, { id: 2, age: 20 }, { id: 3, age: 71 }];

const filterByAge = users => users.filter(user => user.age > 21);

const result = filterByAge(users);

console.log(result); // => [{ id: 1, age: 33 }, { id: 3, age: 71 }]

// point free approach

const isAboveAge = user => user.age > 21;

// this program reads like a poem. You don't have to worry about how / what these functions are are implementing.
// You understand them through their function names.
const filterByAgePointFree = fp.filter(isAboveAge);

console.log(filterByAgePointFree(users)); // => [{ id: 1, age: 33 }, { id: 3, age: 71 }]

// some easy ways to start implementing 'point-free'.

// non point-free
someServiceCall().then(res => doSomethingWithResponse(res));

// easy point-free
someServiceCall().then(doSomethingWithResponse); // => :)

// The power of point-free programming comes with modularizing your code and making functions smaller / more reusable.
// Your code becomes more testable and less error-prone.