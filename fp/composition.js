const compose = (...fns) => arg => {
  if (fns.length === 1) return fns[0](arg);

  return [...fns].reverse().reduce((a, b) => b(a(arg)));
}

// adds by itself
const add = num => num + num;

// multiplys by itself
const multiply = num => num * num;

// contrived example
const addAndMultiply = compose(multiply, add);

console.log(addAndMultiply(2));

// real world example
// const filterByEven = num => num % 2 === 0;

// imperative approach
const filterbyEvenAndMultiply = (array) => {
  const filtered = array.filter(num => num % 2 === 0);
  const mapped = array.map(num => num * 2);

  return mapped;
};

console.log(filterbyEvenAndMultiply([1, 2, 3, 4, 5, 6]));

// using function composition

const filter = curry((fn, arr) => arr.filter(fn));
const map = curry((fn, arr) => arr.map(fn));
const isEven = num => num % 2 === 0;

// declarative approach.
const composed = compose(
  map(multiply),
  filter(isEven),
);

console.log(composed([2, 3, 4, 5, 6]))
