// pure function
const thisIsPure = num => num * 2;

// not pure
let num = 5;
const thisIsNotPure = () => num *= 2;
thisIsNotPure();

console.log(num);

// next
let arr = ['there', 'hello'];
const alsoNotPure = arr => arr.reverse().join(' ');
const result = alsoNotPure(arr);

console.log(arr, result);

let arrTwo = ['there', 'hello'];
const thisIsNowPure = arr => [...arr].reverse().join(' ');
const resultTwo = thisIsNowPure(arrTwo);

console.log(arrTwo, resultTwo);
