import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";
import { AvailableUser } from "./useGroupUsersQuery";

const getAvailableUsers = (): Promise<AxiosResponse<AvailableUser[]>> => {
  return accessClient.get(`/groups/user_convo`);
};

const useConvoUsersQuery = () => {
  return useQuery({
    queryKey: ["available-users"],
    select: (data: any) => {
      return data.data;
    },
    queryFn: getAvailableUsers,
  });
};

export default useConvoUsersQuery;
