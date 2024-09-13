const superHeroes: string[] = [];
superHeroes.push("Batman");
superHeroes.push("Superman");
superHeroes.push("Flash");
superHeroes.push("Aquaman");

const superHeroes2: Array<string> = [];
superHeroes2.push("Batman");
superHeroes2.push("Superman");
superHeroes2.push("Flash");
superHeroes2.push("Aquaman");

const superHeroes3: Array<string | number> = [];
superHeroes3.push("Batman");
superHeroes3.push("Superman");
superHeroes3.push("Flash");
superHeroes3.push("Aquaman");
superHeroes3.push(123);

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

const allUsers: User[] = [];

const MLModel: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(MLModel[0][0]);

// Union

// It means that the variable can be of type string or number or combination of both

let score: number | string = 33;
score = "33";
score = 99;

type Player = {
  _id: string;
  name: string;
  score: number | string;
};

type Admin = {
  _id: string;
  username: string;
  password: string;
};

let rock: Player | Admin;
rock = {
  _id: "123",
  name: "John",
  score: 33,
};
rock = {
  _id: "123",
  username: "John",
  password: "123",
};

function getDB(id: number | string): Player | Admin {
  // id.tolow
  if (typeof id === "number") {
    id++;
  } else if (typeof id === "string") {
    id = id.toUpperCase();
  }
  return {
    _id: "123",
    name: "John",
    score: 33,
  };
}

// const data: number[] | string[] = [
//     1,
//     2,
//     3,
//     "Rishabh"
//     Wrong
// ]

const data: (number | string)[] = [1, 2, 3, "Rishabh"];
console.log(data);

let pie: 3.14 = 3.14;
// pie = 3.15;

let seatAllotement: "window" | "middle" | "aisle";

seatAllotement = "window";
seatAllotement = "middle";
seatAllotement = "aisle";
// seatAllotement="Base"

export {};
