"use strict";
exports.__esModule = true;
var superHeroes = [];
superHeroes.push("Batman");
superHeroes.push("Superman");
superHeroes.push("Flash");
superHeroes.push("Aquaman");
var superHeroes2 = [];
superHeroes2.push("Batman");
superHeroes2.push("Superman");
superHeroes2.push("Flash");
superHeroes2.push("Aquaman");
var superHeroes3 = [];
superHeroes3.push("Batman");
superHeroes3.push("Superman");
superHeroes3.push("Flash");
superHeroes3.push("Aquaman");
superHeroes3.push(123);
var allUsers = [];
var MLModel = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(MLModel[0][0]);
// Union
// It means that the variable can be of type string or number or combination of both
var score = 33;
score = "33";
score = 99;
var rock;
rock = {
    _id: "123",
    name: "John",
    score: 33
};
rock = {
    _id: "123",
    username: "John",
    password: "123"
};
function getDB(id) {
    // id.tolow
    if (typeof id === "number") {
        id++;
    }
    else if (typeof id === "string") {
        id = id.toUpperCase();
    }
    return {
        _id: "123",
        name: "John",
        score: 33
    };
}
// const data: number[] | string[] = [
//     1,
//     2,
//     3,
//     "Rishabh"
//     Wrong
// ]
var data = [1, 2, 3, "Rishabh"];
console.log(data);
var pie = 3.14;
// pie = 3.15;
var seatAllotement;
seatAllotement = "window";
seatAllotement = "middle";
seatAllotement = "aisle";
