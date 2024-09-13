"use strict";
exports.__esModule = true;
var myUser = {
    _id: "123",
    name: "John",
    email: "h@h.com",
    isActive: true
};
// myUser._id = "1234";
// Cannot assign to '_id' because it is a read-only property
function createUserV2(user) {
    return user;
}
createUserV2(myUser);
