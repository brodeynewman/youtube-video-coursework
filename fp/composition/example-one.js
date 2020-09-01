const addTwo = num => num + 2;
const multiplyTwo = num => num * 2;
const divideTwo = num => num / 2;

const compose = (...fns) => (arg) => {
  return fns.reverse().reduce((value, func) => {
    return func(value);
  }, arg);
};

const doMathComposed = compose(
  divideTwo,
  multiplyTwo,
  addTwo,
);

const anotherComposedFunction = compose(
  doMathComposed,
  compose(addTwo, multiplyTwo),
);

console.log(anotherComposedFunction(5)); // 14
