interface User {
  email: string;
  userId: string;
  // Interface can have optional properties
  // They can be said as the loosely coupled class.
  readonly _id: string;
  // readonly properties can be initialized only once.
  googleId?: string;

  startTrail: () => string;
  declineTrail(): string;
  getCoupon(coupnName: string): number;
}

const rishabh: Admin = {
  email: "@a.com",
  userId: "rishabh",
  _id: "123",
  googleId: "123",
  startTrail: () => "Trial started",
  declineTrail: () => "Trial declined",
  getCoupon(coupnName: "Rishabh") {
    console.log(coupnName);
    return 10;
  },
  gitHubId: "rishabh",
    role: "admin",
};

interface Admin extends User {
  role: "admin" | "super-admin" | "user";
}

interface User {
  // Interface can be extended
  gitHubId: string;
}

export {};
