// any 
// It is a type that allows any value to be assigned to it.
// but it is not a good pratice to use it

let hero:string;

const getHero = () => {
    return "hero";
    // return 1;
}

hero = getHero();
console.log(hero);
// when no type is specified, the type is any
// In any it just avoid the error and not check the type

// here the type of hero is any.
export{}