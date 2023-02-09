export type patientDataModel = {
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
  nextAppointment: string | undefined | null;
  lastAppointment: string | undefined | null;
  nextAppointmentsCount: number;
  previousAppointmentsCount: number;
};
