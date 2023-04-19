import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { getPayments, paymentDataModel } from "../../types/paymentData";
import { AxiosResponse } from "axios";

export const getPayment = (): Promise<AxiosResponse<getPayments>> => {
  console.log("Getting Payments");
  const page = 0;
  return accessClient.get(`/appointment/get_payment_info?page=${page}`);
};

export const usePaymentQuery = () => {
  return useQuery(["paymentInfo"], () => getPayment(), {
    select: (data: any) => {
      return data.data.docs;
    },
    enabled: true,
  });
};
