//
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
  //   ? means optional
};

let myUser: User = {
  _id: "123",
  name: "John",
  email: "h@h.com",
  isActive: true,
};
// myUser._id = "1234";
// Cannot assign to '_id' because it is a read-only property

function createUserV2(user: User): User {
  return user;
}
createUserV2(myUser);

type CardNumber = {
  cardNumber: string;
};
type CardDate = {
  cardDate: string;
};
type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

export {};
