function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, "has logged in");
  };
}

let userOne = new User("danny@ninjas.com", "Danny");
let userTwo = new User("adam@ninjas.com", "Adam");

console.log(userOne);
userTwo.login();
