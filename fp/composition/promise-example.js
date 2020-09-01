const doSomething = () => new Promise(() => {});

const foo = () => new Promise(() => {});
const bar = () => new Promise(() => {});
const baz = () => new Promise(() => {});

doSomething()
  .then(foo)
  .then(bar)
  .then(baz);
