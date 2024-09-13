"use strict";
// abstract class-> They are used to create a base class from which other classes can be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReal() {
        return "Real in TakePhoto";
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSapia() {
        return "Sapia";
    }
    getReal() {
        return "Real in Instagram";
    }
}
const tc = new Instagram("auto", "black and white", 2);
tc.getReal();
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(2);
identityThree("2");
identityThree(true);
function bootleInfo(val) {
    return val;
}
bootleInfo({ name: "Pepsi", price: 2 });
bootleInfo({
    name: "Pepsi",
    price: 2,
});
function getSearchProduct(products) {
    return products[0];
}
const getMoreProduct = (products) => {
    return products[0];
};
function anotherFunction(val, val2) {
    return {
        val,
        val2,
    };
}
// generic class
class Sellable {
    constructor() {
        this.cart = [];
    }
    addProduct(product) {
        this.cart.push(product);
    }
}
const quiz = new Sellable();
quiz.addProduct({
    name: "Quiz 1",
    type: "quiz",
});
// narrow down the type of the variable
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return val.toFixed(2);
    }
}
function provideId(id) {
    if (!id) {
        return "No ID";
    }
    return id.toUpperCase();
}
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (strs && typeof strs === "string") {
        console.log(strs);
    }
}
function printUser(user) {
    console.log(user.name);
    if ("isAdmin" in user) {
        console.log("user.isAdmin", user.isAdmin);
    }
}
function logValue(x) {
    if (x instanceof Date) {
        // instance of is used to check the type of the object
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return pet.foodIs("fish");
    }
    pet;
    return pet.foodIs("bird");
}
