let userOne = {
  email: "rye@ninjas.com",
  name: "Rye",
  //methods
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};

console.log(userOne.name);
