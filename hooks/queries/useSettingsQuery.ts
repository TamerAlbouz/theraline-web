import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type SettingDetails = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
};

const getSettingDetails = (): Promise<AxiosResponse<SettingDetails>> => {
  return accessClient.get(`/auth/me`);
};

const useSettingsQuery = () => {
  return useQuery({
    queryKey: ["settings"],
    select: (data) => data.data,
    queryFn: getSettingDetails,
    refetchOnMount: false,
  });
};

export default useSettingsQuery;
