const user = {
  id: 1,
  name: "John",
  age: 25,
};

const userFunc = (user) => {
  const x = JSON.stringify(user);
  return localStorage.setItem("user", x);
}

userFunc(user);