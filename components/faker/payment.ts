import { faker } from "@faker-js/faker";

class Payment {
  "paymentId": string;
  "date": string;
  "paymentStatus": string;
  "method": string;
  "note": string;
  "amount": string;
}

export function createRandomPayment(): Payment {
  return {
    paymentId: faker.datatype.uuid(),
    date: faker.date.past().toDateString(),
    paymentStatus: faker.helpers.arrayElement(["Paid", "Pending", "Awaiting"]),
    method: faker.helpers.arrayElement(["Cash", "Credit Card", "Check"]),
    note: faker.finance.transactionType(),
    amount: faker.finance.amount(undefined, undefined, 2, "$"),
  };
}
