import { Appointment } from "../appointments/useAppointmentsQuery";
import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type PatientListItem = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  image?: string;
  phone?: string;
  nextAppointment?: Appointment;
  lastAppointment?: Appointment;
};

const getPatients = (): Promise<AxiosResponse<PatientListItem[]>> => {
  return accessClient.get(`/user/patient_list`);
};

const usePatientListQuery = () => {
  return useQuery({
    queryKey: ["patient-list"],
    select: (data) => data.data,
    queryFn: getPatients,
    refetchOnMount: false,
  });
};

export default usePatientListQuery;
