"use strict";
exports.__esModule = true;
var User = {
    name: "John",
    email: "aryan@gmail.com",
    isActive: true
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
createUser({
    name: "John",
    isPaid: true
});
function createCourse(_a) {
    var string = _a.name, number = _a.price;
    return {
        name: "name",
        price: 0
    };
}
var newUser = {
    name: "John",
    email: "a@a.com",
    isPaid: true
};
createUser(newUser);
function createUserV2(user) {
    console.log(user.name);
    return user;
}
createUserV2({
    name: "John",
    email: "a@a.com",
    isActive: true
});
