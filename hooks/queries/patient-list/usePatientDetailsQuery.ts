import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";
import { PatientNote } from "./useNotesQuery";

export type PatientDetails = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  birthday: string;
  doctors: string[];
  notes: PatientNote[];
  previous: number;
  next: number;
};

const getPatientDetails = (
  patientId: string,
): Promise<AxiosResponse<PatientDetails>> => {
  console.log(`Here ${patientId}`);
  return accessClient.get(`/user/patient_details/${patientId}`);
};

const usePatientDetailsQuery = (patientId: string) => {
  return useQuery({
    queryKey: ["patient-details", patientId],
    select: (data) => data.data,
    queryFn: () => getPatientDetails(patientId),
    refetchOnMount: false,
  });
};

export default usePatientDetailsQuery;
