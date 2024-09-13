"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _User_subject;
class User {
    //   unmarked means public
    //   private means only accessible within the class
    constructor(email, name, subject) {
        _User_subject.set(this, void 0);
        this.city = "Delhi";
        this.email = email;
        this.name = name;
        __classPrivateFieldSet(this, _User_subject, subject, "f");
    }
}
_User_subject = new WeakMap();
const rishabh = new User("risha@gmail.com", "Rishabh", "Maths");
// rishabh.city = "Mumbai";
// Error: Cannot assign to 'city' because it is a read-only property.
class User2 {
    constructor(email, name, subject) {
        this.email = email;
        this.name = name;
        this.subject = subject;
        // private _courseCount = 1;
        this._courseCount = 1;
        this.city = "Delhi";
    }
    get getAppEmail() {
        return `app ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        this._courseCount = value;
        if (value > 2) {
            console.log("You have exceeded the limit");
        }
        // setter doesnt have return type
    }
    deleteEmail() {
        console.log("Deleting email");
    }
}
const rishabh2 = new User2("risha@gmail.com", "Rishabh", "Maths");
class SubUser extends User2 {
    changeCourse() {
        this._courseCount = 2;
        // Prvte hence not accessible
        // on changing to protected it is accessible only to that class which extends it
    }
    constructor(email, name, subject) {
        super(email, name, subject);
        this.isFamilyMember = true;
    }
}
// interface make sure that the class implements the interface
// a must do thing
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, shots) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shots = shots;
    }
    // adding extra argumnet is ohkay
    createStory() {
        console.log("Creating Story");
    }
}
