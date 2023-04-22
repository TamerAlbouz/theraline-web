import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type PatientDetails = {};

const getPatientDetails = (
  patientId: string,
): Promise<AxiosResponse<PatientDetails>> => {
  console.log(`Here ${patientId}`);
  return accessClient.get(`/user/patient_details/${patientId}`);
};

const usePatientDetailsQuery = (patientId: string) => {
  return useQuery({
    queryKey: ["patient-details", patientId],
    select: (data) => {
      console.log(data);
    },
    queryFn: () => getPatientDetails(patientId),
    refetchOnMount: false,
    enabled: false,
  });
};

export default usePatientDetailsQuery;
