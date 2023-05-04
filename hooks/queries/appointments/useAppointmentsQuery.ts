import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { accessClient } from "../../../utils/axios/axios";

export type AppDoctor = {
  _id: string;
  fullName: string;
  email: string;
};

export type AppPatient = {
  _id: string;
  fullName: string;
  email: string;
};

export type PaymentInfo = {
  amount: number;
  status: string;
  method: string;
  date: string;
  _id: string;
};

export type Appointment = {
  _id: string;
  patient: AppPatient;
  title: string;
  doctor: AppDoctor;
  start_date: string;
  end_date: string;
  status: "CREATED" | "CANCELLED" | "DONE" | "CONFIRMED";
  paymentInfo: PaymentInfo | undefined | null;
  __v: 0;
};

export type GetAppointments = {
  docs: Appointment[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: false;
  hasNextPage: true;
  prevPage: null;
  nextPage: number;
};

const getAppointments = (): Promise<AxiosResponse<GetAppointments>> => {
  console.log("Getting Appointments");
  const page = 0;
  return accessClient.get(`appointment/doctor/appointment?page=${page}`);
};

const useAppointmentsQuery = () => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: () => getAppointments(),
    select: (data: any) => {
      return data.data.docs;
    },
    enabled: true,
  });
};

export default useAppointmentsQuery;
