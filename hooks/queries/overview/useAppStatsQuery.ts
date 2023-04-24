import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

export const getAppStats = async () => {
  return accessClient.get("/appointment/appointment_stats");
};

export const useAppStatsQuery = () => {
  return useQuery(["AppStats"], getAppStats, {
    select: (data: any) => {
      return data.data;
    },
    refetchOnMount: false,
    enabled: true,
  });
};
