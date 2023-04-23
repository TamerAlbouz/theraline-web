import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type PatientNote = {
  title: string;
  body: string;
  author: string;
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
