import { faker } from "@faker-js/faker";

type _Payment = {
  paymentId: string;
  name: string;
  imageUrl: string;
  email: string;
  date: string;
  paymentStatus: string;
  method: string;
  amount: string;
};

function _createRandomPayment(): _Payment {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const name = faker.name.fullName({ firstName, lastName });
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    paymentId: faker.datatype.uuid(),
    name,
    imageUrl: faker.image.imageUrl(undefined, undefined, "people", true),
    email,
    date: faker.date.past().toDateString(),
    paymentStatus: faker.helpers.arrayElement(["Paid", "Pending", "Awaiting"]),
    method: faker.helpers.arrayElement(["Cash", "Credit Card", "Check"]),
    amount: faker.finance.amount(undefined, undefined, 2, "$"),
  };
}

/**
 * Creates an array of random payments
 * @param numPayments - Number of payments to create
 * @returns Array of random payments
 * @category Payment
 * @public
 * @example
 * ```ts
 * import { createRandomPayments } from "@utils/payment-utils";
 *    const payments = createRandomPayments(10);
 * ```
 */
export function createPayments(numPayments: number): _Payment[] {
  return Array.from({ length: numPayments }, _createRandomPayment);
}
