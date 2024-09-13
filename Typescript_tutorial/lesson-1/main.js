var user = {
    name: "Rishabh",
    age: 20
};
console.log("Rishabh");
console.log(user.name, user.age);
// console.log(user.email)
/*
    Error: Property 'email' does not exist on type '{ name: string; age: number; }'.
    Types of datatype in typescript
    1. number - for both integer and float
    2. string - for both single and double quotes
    3. boolean - for both true and false
    4. any - for any datatype
    5. void - for no return type
    6. undefined - for undefined
    7. null - for null
    8. never - for never return type
    9. object - for object
    10. array - for array
    11. tuple - for tuple which is array with fixed length
    12. enum - for enum
    13. unknown
*/
/*
    Situation function accept 2 numbers and return a string
    In that case typescript will not allow us to return a number
*/
/*
    syntax
    let variableName: type = value;
*/ 
