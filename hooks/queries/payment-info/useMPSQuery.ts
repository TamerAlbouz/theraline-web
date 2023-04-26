import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

export const getMPS = async () => {
  return accessClient.get("/appointment/monthly_payment_count");
};

export const useMPSQuery = () => {
  return useQuery(["mpsquery"], getMPS, {
    select: (data: any) => {
      return data.data;
    },
    refetchOnMount: false,
    enabled: true,
  });
};
