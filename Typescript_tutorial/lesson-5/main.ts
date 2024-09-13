function addTwo(num) {
    num.toUpperCase();
    // see no problem here
    // but num is actually of type any
    return num + 2;
}
addTwo(2);
addTwo("2");
// Type is any

function addTwoV2(num: number): number {
    return num + 2;
}
addTwoV2(2);
// addTwoV2("2");
// Type is number,will give error

function addTwoV3(num: number | string): number | string {
    return typeof num === "number" ? num + 2 : num + "2";
}
addTwoV3(2);
addTwoV3("2");
// Both are valid

function signUpUser(name: string, email: string, isPaid: boolean) {
    console.log(name, email, isPaid);
}

signUpUser("John", "a@a.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log(name, email, isPaid);
};
loginUser("John", "a@a.com");
// isPaid is optional you can put default value

// For making sure the dataType which is returning use syntax

// function fName(p1:DataType1,p2:DataTyp2): dataType

function responseFromAPI(num: number): boolean | string {
    if (num > 10) {
        return true;
    }
    return "200 OK";
}

console.log(responseFromAPI(11));

const heroes = ["Batman", "Superman", "Spiderman", "Ironman", "Thor"];

heroes.map((hero) => {
    console.log(hero);
});

const heroId = [1, 2, 3, 4];
heroId.map((id) => {
    console.log(id);
    return `id is ${id}`;
});

function handleError(err: string): never {
    throw new Error(err);
    // never means it will never return anything
    // It is used when we are sure that the function will never return anything
}
function consoleError(err: string): void {
    console.log(err);
}

export { };
