// take 1: eh way
// will work but is synchronous and blocking, which in practice is the opposite of what API's are actually like
// returns { username: 'bulbasaur', email: 'bulbasaur@test.com' }
// 
// function getUsers() {
//   return [
//     { username: 'bulbasaur', email: 'bulbasaur@test.com' },
//     { username: 'charmander', email: 'charmander@test.com' },
//   ];
// }

// function findUser(username) {
//   const users = getUsers(); 
//   const user = users.find((user) => user.username === username);
//   return user;
// }

// console.log(findUser('bulbasaur'));

// take 2: fetching with set timeout
// will return undefined because the users array is always empty since we are still waiting for the setTimeout to execute
// function getUsers() {
//   let users = [];

//   // delay 1 second (1000ms)
//   setTimeout(() => {
//     users = [
//       { username: 'bulbasaur', email: 'bulbasaur@test.com' },
//       { username: 'charmander', email: 'charmander@test.com' },
//     ];
//   }, 1000);

//   return users;
// }

// function findUser(username) {
//   const users = getUsers(); 
//   const user = users.find((user) => user.username === username);
//   return user;
// }

// console.log(findUser('bulbasaur'));

// take 3: fetching with callbacks
// a callback is a function that you pass into another function as an argument for executing later
// works but is cursed because complexity will grow with the number of nested calls we make to the network and adds unnecessary complexity with the callback arguments

// // accepts a callback function as an argument and invokes it with the users array inside the setTimeout() function
// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { username: 'bulbasaur', email: 'bulbasaur@test.com' },
//       { username: 'charmander', email: 'charmander@test.com' },
//     ]);
//   }, 1000);
// }

// accepts a callback function that processes the matched user
// function findUser(username, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     callback(user);
//   });
// }

// findUser('bulbasaur', console.log);

// take 4: fetching with promises
// so much nicer - code is cleaner without needing to pass callback arguments into fns

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isError = true;
//       if (isError) {
//         reject('failed to the user list');
//       } else {
//         resolve([
//           { username: 'bulbasaur', email: 'bulbasaur@test.com' },
//           { username: 'charmander', email: 'charmander@test.com' },
//         ]);
//       }
//     }, 1000);
//   });
// }

// getUsers().then((users) => {
//   console.log(users.find((user) => user.username === 'bulbasaur'));
// }).catch((error) => {
//   console.error('Error:', error);
// });