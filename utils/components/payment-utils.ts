import { faker } from "@faker-js/faker";
import { paymentDataModel } from "../../types/paymentData";

function _createRandomPayment(): paymentDataModel {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const name = faker.name.fullName({ firstName, lastName });
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    Id: faker.datatype.uuid(),
    paymentInfo: {
      name,
      imageUrl: faker.image.imageUrl(undefined, undefined, "people", true),
      email,
      date: faker.date.past().toDateString(),
      paymentStatus: faker.helpers.arrayElement([
        "Paid",
        "Pending",
        "Awaiting",
      ]),
      method: faker.helpers.arrayElement(["Cash", "Credit Card", "Check"]),
      amount: faker.finance.amount(undefined, undefined, 2, "$"),
      Id: faker.datatype.uuid(),
    },
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
export function createPayments(numPayments: number): paymentDataModel[] {
  return Array.from({ length: numPayments }, _createRandomPayment);
}
