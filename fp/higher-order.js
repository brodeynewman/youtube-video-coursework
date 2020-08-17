
/***** FIRST EXAMPLE *****/

const foo = () => {};

console.log(foo);

const bar = () => {
  return () => {
    console.log('hello there');
  };
};

bar()();

/***** SECOND EXAMPLE *****/

const updateNumbers = numbers => numbers.map(num => num + 2);
console.log(updateNumbers([1, 2, 3]));

/***** THIRD EXAMPLE *****/

const map = (array, callback) => {
  const updated = [];

  for (let i = 0; i < array.length; i++) {
    const update = callback(array[i]);

    updated.push(update);
  }

  return updated;
}

const result = map([1, 2, 3], num => num + 2);
console.log('here', result);

/***** FOURTH EXAMPLE *****/

// ES6
// const greeter = greeting => name => console.log(`${greeting}, ${name}!`);

function greeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  }
}

const withHello = greeter('Hello');

const names = ['Brodey', 'Youtube', 'Sally'];

const updatedGreetings = names.map(withHello);

console.log(updatedGreetings);
