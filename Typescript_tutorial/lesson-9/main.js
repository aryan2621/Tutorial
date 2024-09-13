"use strict";
exports.__esModule = true;
var user = ["Rishabh"];
// we can also use str| num but that doesnt keep sequence
var user1 = ["Rishabh", 33];
// This is an example of tuple
user1[0] = "Rishabh";
user1[1] = 33;
// This wont work
// user1[1] = "Rishabh";
// user1[0] = 33;
// but
user1.push("true", 33);
var mySeat = "AISLE" /* SeatChoice.AISLE */;
console.log(mySeat);
