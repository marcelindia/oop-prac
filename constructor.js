function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};
User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

let userOne = new User("danny@ninjas.com", "Danny");
let userTwo = new User("adam@ninjas.com", "Adam");

console.log(userOne);
userTwo.login();
