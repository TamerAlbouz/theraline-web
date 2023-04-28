import {
  AppPatient,
  PaymentInfo,
} from "../hooks/queries/appointments/useAppointmentsQuery";

export type calendarEventModel = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  status: "CREATED" | "CANCELED" | "DONE" | "CONFIRMED" | undefined | null;
  paymentInfo: PaymentInfo | undefined | null;
  patient: AppPatient;
};
