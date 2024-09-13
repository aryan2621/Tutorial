// abstract class-> They are used to create a base class from which other classes can be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) { }
  abstract getSapia(): string;
  getReal(): string {
    return "Real in TakePhoto";
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSapia(): string {
    return "Sapia";
  }
  getReal(): string {
    return "Real in Instagram";
  }
}
const tc = new Instagram("auto", "black and white", 2);
tc.getReal();
function identityOne(val: boolean): boolean | number {
  return val;
}
function identityTwo(val: any): any {
  return val;
}
function identityThree<T>(val: T): T {
  return val;
}
identityThree(2);
identityThree("2");
identityThree(true);

interface Bootle {
  name: string;
  price: number;
}

function bootleInfo<T extends Bootle>(val: T): T {
  return val;
}
bootleInfo({ name: "Pepsi", price: 2 });
bootleInfo<Bootle>({
  name: "Pepsi",
  price: 2,
});

function getSearchProduct<T>(products: T[]): T {
  return products[0];
}

const getMoreProduct = <T>(products: T[]): T => {
  return products[0];
};
function anotherFunction<Y, U extends number>(val: Y, val2: U): object {
  return {
    val,
    val2,
  };
}

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}
// generic class
class Sellable<T> {
  public cart: T[] = [];
  public addProduct(product: T): void {
    this.cart.push(product);
  }
}

const quiz = new Sellable<Quiz>();

quiz.addProduct({
  name: "Quiz 1",
  type: "quiz",
});

// narrow down the type of the variable

function detectType(val: string | number) {
  if (typeof val === "string") {
    return val.toUpperCase();
  } else {
    return val.toFixed(2);
  }
}
function provideId(id: string | null) {
  if (!id) {
    return "No ID";
  }
  return id.toUpperCase();
}
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (strs && typeof strs === "string") {
    console.log(strs);
  }
}

interface User {
  name: string;
  age: number;
}
interface Admin {
  name: string;
  age: number;
  role: string;
  isAdmin: boolean;
}
function printUser(user: User | Admin) {
  console.log(user.name);
  if ("isAdmin" in user) {
    console.log("user.isAdmin", user.isAdmin);
  }
}
function logValue(x: Date | string) {
  if (x instanceof Date) {
    // instance of is used to check the type of the object
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {
  swim: () => void;
  foodIs: (str: string) => string;
}
type Bird = {
  fly: () => void;
  foodIs: (st: string) => string;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet
    return pet.foodIs("fish");
  }
  pet
  return pet.foodIs("bird");
}
export { };
