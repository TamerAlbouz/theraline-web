import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { accessClient } from "../../utils/axios/axios";

export type Appointment = {
  _id: string;
  patient_id: string;
  title: string;
  doctor_id: string;
  start_date: string;
  end_date: string;
  status: "CREATED" | "CANCELED" | "DONE" | "CONFIRMED";
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
