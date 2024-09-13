class User {
    public email: string;
    private name: string;
    #subject: string;
    readonly city: string = "Delhi";
    //   unmarked means public
    //   private means only accessible within the class
    constructor(email: string, name: string, subject: string) {
        this.email = email;
        this.name = name;
        this.#subject = subject;
    }
}

const rishabh = new User("risha@gmail.com", "Rishabh", "Maths");
// rishabh.city = "Mumbai";
// Error: Cannot assign to 'city' because it is a read-only property.

class User2 {
    // private _courseCount = 1;
    protected _courseCount = 1;
    readonly city: string = "Delhi";
    constructor(
        public email: string,
        private name: string,
        private subject: string
    ) { }

    get getAppEmail(): string {
        return `app ${this.email}`;
    }
    get courseCount(): number {
        return this._courseCount;
    }
    set courseCount(value: number) {
        this._courseCount = value;
        if (value > 2) {
            console.log("You have exceeded the limit");
        }
        // setter doesnt have return type
    }
    private deleteEmail() {
        console.log("Deleting email");
    }
    // private means only accessible within the class
}
const rishabh2 = new User2("risha@gmail.com", "Rishabh", "Maths")

class SubUser extends User2 {
    isFamilyMember: boolean = true;
    changeCourse() {
        this._courseCount = 2;
        // Prvte hence not accessible
        // on changing to protected it is accessible only to that class which extends it
    }
    constructor(email: string, name:
        string, subject: string) {
        super(email, name, subject);
    }
}

interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}
interface Story {
    createStory(): void
}
// interface make sure that the class implements the interface
// a must do thing
class Instagram implements TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) { }
}

class Youtube implements TakePhoto, Story {
    constructor(public cameraMode: string, public filter: string, public burst: number, private shots: string) { }
    // adding extra argumnet is ohkay

    createStory() {
        console.log("Creating Story");
    }
}