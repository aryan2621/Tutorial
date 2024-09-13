const User = {
  name: "John",
  email: "aryan@gmail.com",
  isActive: true,
};

const createUser = ({ name: string, isPaid: boolean }) => {};
createUser({
  name: "John",
  isPaid: true,
});

function createCourse({ name: string, price: number }): {
  name: string;
  price: number;
} {
  return {
    name: "name",
    price: 0,
  };
}
let newUser = {
  name: "John",
  email: "a@a.com",
  isPaid: true,
};
createUser(newUser);
// no issue even we passed email extra property

// This is an example of type alias
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUserV2(user: User): User {
  console.log(user.name);
  return user;
}
createUserV2({
  name: "John",
  email: "a@a.com",
  isActive: true,
});


export {};
