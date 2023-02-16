import { faker } from "@faker-js/faker";

class Patient {
  "patientId": string;
  "name": string;
  "imageUrl": string;
  "email": string;
  "phoneNumber": string;
  "city": string;
  "street": string;
  "gender": string;
  "birthday": string;
  "zipCode": string;
  "memberStatus": string;
  "registerDate": string;
  "nextAppointment": string | null;
  "lastAppointment": string | null;
  "nextAppointmentsCount": number;
  "previousAppointmentsCount": number;
}

export function createRandomPatient(): Patient {
  const sex = faker.name.sexType();
  const name = faker.name.fullName({ sex });
  const email = faker.internet.email(
    name.split(" ")[0],
    name.split(" ")[1],
    "gmail.com"
  );
  const phoneNumber = faker.phone.number().split(" x")[0];
  const city = faker.address.city();
  const street = faker.address.streetName();

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
