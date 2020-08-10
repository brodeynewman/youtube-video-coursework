// A function that returns a function in order to hold a variable in memory
const curriedGreeting = greeting => name => `${greeting}, ${name}!`;

const withHello = curriedGreeting('Hello');
const withHola = curriedGreeting('Hola');

console.log(withHello('Brodey'));
console.log(withHola('Youtube'));

// resuable curry function
const curry = fn => function curry(...args) {
  if (args.length < fn.length) {
    return (...moreArgs) => curry.apply(this, [...args, ...moreArgs]);
  }

  return fn.apply(this, args);
}

// these are now curried
const filter = curry((fn, arr) => arr.filter(fn));
const map = curry((fn, arr) => arr.map(fn));
