// let userOne = {
//   email: "rye@ninjas.com",
//   name: "Rye",
//   //methods
//   login() {
//     console.log(this.email, "has logged in");
//   },
//   logout() {
//     console.log(this.email, "has logged out");
//   },
// };

// console.log(userOne.name);

// //updating properties

// userOne.name = "Diana";
// userOne.age = 27;

//classes
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

let userOne = new User("danny@ninjas.com", "Danny");
let userTwo = new User("adam@ninjas.com", "Adam");
console.log(userOne);
console.log(userTwo);
