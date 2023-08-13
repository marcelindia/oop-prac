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
    this.score = 0;
  }
  //methods
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "has logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

let userOne = new User("danny@ninjas.com", "Danny");
let userTwo = new User("adam@ninjas.com", "Adam");
// console.log(userOne);
// console.log(userTwo);

// userOne.login();
// userTwo.logout();

//method chaining
userOne.login().updateScore().updateScore().logout();
