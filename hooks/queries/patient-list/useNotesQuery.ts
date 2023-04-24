import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type PatientNote = {
  fullName: string;
  title: string;
  body: string;
  patient_id: string;
};

const getPatientNotes = (
  patientId: string,
): Promise<AxiosResponse<PatientNote>> => {
  console.log(`Here ${patientId}`);
  return accessClient.get(``);
};

const useNotesQuery = (patientId: string) => {
  return useQuery({
    queryKey: ["patient-notes", patientId],
    select: (data) => {
      console.log(data);
    },
    queryFn: () => getPatientNotes(patientId),
    refetchOnMount: false,
  });
};

export default useNotesQuery;
