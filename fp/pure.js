/* -------- EXAMPLE ONE --------- */


// let array = ['there', 'Hello'];

// const reverseArray = () => array.reverse().join(' ');

// console.log(reverseArray());
// console.log(array);



/* -------- EXAMPLE TWO --------- */


// let array = ['there', 'Hello'];

// const reverseArray = arr => [...arr].reverse().join(' ');

// console.log(reverseArray(array));
// console.log(array);

/* -------- EXAMPLE THREE --------- */


// const updateUser = (user) => {
//   const updatedUser = { ...user };

//   updatedUser.age = 25;
//   updatedUser.color = 'green';

//   return updatedUser;
// }

/* -------- EXAMPLE FOUR --------- */


// const updateUser = (user) => {
//   user.age = 25;
//   user.color = 'green';

//   return user;
// };

// const initialUser = {};

// const result = updateUser(initialUser);

// console.log(result, initialUser);

/* -------- EXAMPLE FIVE --------- */


const updateUser = (user) => {
  const updatedUser = { ...user };
  
  updatedUser.age = 25;
  updatedUser.color = 'green';

  return updatedUser;
};

const initialUser = {};

const result = updateUser(initialUser);

console.log(result, initialUser);
