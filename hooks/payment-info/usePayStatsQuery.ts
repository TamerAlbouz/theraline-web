import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";

export const getPayStats = async () => {
  return accessClient.get("/appointment/payment_stats");
};

export const usePayStatsQuery = () => {
  return useQuery(["PayStats"], getPayStats, {
    select: (data: any) => {
      return data.data;
    },
    refetchOnMount: false,
    enabled: true,
  });
};
