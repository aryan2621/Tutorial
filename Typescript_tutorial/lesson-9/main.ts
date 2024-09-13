const user: string[] = ["Rishabh"];
// we can also use str| num but that doesnt keep sequence

const user1: [string, number] = ["Rishabh", 33];
// This is an example of tuple
user1[0] = "Rishabh";
user1[1] = 33;

// This wont work
// user1[1] = "Rishabh";
// user1[0] = 33;
// but

user1.push("true", 33);

// Enums
// Enums are used to define a set of named constants

const enum SeatChoice {
  WINDOW = "WINDOW",
  AISLE = "AISLE",
  MIDDLE = "MIDDLE",

  // by default integer values are assigned to enums
}
const mySeat: SeatChoice = SeatChoice.AISLE;
console.log(mySeat);
export {};
