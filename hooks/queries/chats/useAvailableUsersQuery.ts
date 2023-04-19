import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type AvailableUser = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};

const getAvailableUsers = (): Promise<AxiosResponse<AvailableUser[]>> => {
  return accessClient.get(`/groups/user_group`);
};

const useAvailableUsersQuery = () => {
  return useQuery({
    queryKey: ["available-users"],
    select: (data: any) => {
      return data.data.users;
    },
    queryFn: getAvailableUsers,
  });
};

export default useAvailableUsersQuery;
