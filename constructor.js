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

///args places admin information (email,name) into an array
function Admin(...args) {
  //takes User function and allows it to be used in Admin function
  User.apply(this, args);
  this.role = "super admin";
}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

let userOne = new User("danny@ninjas.com", "Danny");
let userTwo = new User("adam@ninjas.com", "Adam");
let admin = new Admin("belle@ninjas.com", "Belle");
let users = [userOne, userTwo, admin];

//admin function cont.
console.log(admin);
