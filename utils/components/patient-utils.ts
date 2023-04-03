import { faker } from "@faker-js/faker";
import { patientDataModel } from "../../types/patientData";

type _Patient = {
  patientId: string;
  name: string;
  imageUrl: string;
  email: string;
  phoneNumber: string;
  city: string;
  street: string;
  gender: string;
  birthday: string;
  zipCode: string;
  memberStatus: string;
  registerDate: string;
  nextAppointment: string | null;
  lastAppointment: string | null;
  nextAppointmentsCount: number;
  previousAppointmentsCount: number;
};

function _createRandomPatient(): _Patient {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const name = faker.name.fullName({ firstName, lastName });
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);
  const phoneNumber = faker.phone.number("+961-##-###-###");
  const city = faker.address.city();
  const street = faker.address.street();

  return {
    patientId: faker.datatype.uuid(),
    name,
    imageUrl: faker.image.imageUrl(undefined, undefined, "people", true),
    email,
    phoneNumber,
    city,
    street,
    gender: sex,
    birthday: faker.date.birthdate().toDateString(),
    zipCode: faker.address.zipCode(),
    memberStatus: faker.helpers.arrayElement(["Active", "Inactive"]),
    registerDate: faker.date.past().toDateString(),
    nextAppointment: faker.date.future().toDateString(),
    lastAppointment: faker.date.past().toDateString(),
    nextAppointmentsCount: faker.datatype.number(),
    previousAppointmentsCount: faker.datatype.number(),
  };
}

/**
 * Creates an array of random patients
 * @param numPatients - Number of patients to create
 * @returns Array of random patients
 * @category Patient
 * @public
 * @example
 * ```ts
 * import { createRandomPatients } from "@utils/patient-utils";
 *   const patients = createRandomPatients(10);
 * ```
 */
export function createPatients(numPatients: number): _Patient[] {
  return Array.from({ length: numPatients }, _createRandomPatient);
}
