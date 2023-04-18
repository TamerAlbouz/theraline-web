import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type Patient = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string | undefined | null;
};

const getPatients = (): Promise<AxiosResponse<Patient[]>> => {
  return accessClient.get(`/user/patients`);
};

const usePatientsQuery = () => {
  return useQuery({
    queryKey: ["patients"],
    select: (data: any) => {
      return data.data;
    },
    queryFn: getPatients,
  });
};

export default usePatientsQuery;
