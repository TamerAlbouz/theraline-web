import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type PatientNote = {
  _id: string;
  title: string;
  body: string;
  author?: string;
  lastEdited: Date;
};

const getPatientNotes = (
  patientId: string,
): Promise<AxiosResponse<PatientNote[]>> => {
  return accessClient.get(`/user/get_notes/${patientId}`);
};

const useNotesQuery = (patientId: string) => {
  return useQuery({
    queryKey: ["patient-notes", patientId],
    select: (data) => {
      console.log(data);
      return data.data;
    },
    queryFn: () => getPatientNotes(patientId),
    refetchOnMount: false,
  });
};

export default useNotesQuery;
