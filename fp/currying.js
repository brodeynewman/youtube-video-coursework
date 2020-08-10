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

const isEven = num => num % 2 === 0;
const filterIsEven = filter(isEven);

console.log(filterIsEven([1, 2, 3, 4]));

const result = filter(isEven)([1, 2, 3, 4]);

console.log(result);

// hmm... this looks pretty similar to redux's connect doesn't it?

connect(mapStateToProps)(MyComponent); // react / redux uses a lot of these functional programming concepts :)
