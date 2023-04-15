import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { paymentDataModel } from "../../types/paymentData";

export const getPayment = async () => {
  return accessClient.get("/appointment/get_payment_info", {
    headers: {
      page: "1",
    },
  });
};

export const usePaymentQuery = () => {
  return useQuery(["clinicInfo"], getPayment, {
    select: (data: any) => {
      const payments: Array<paymentDataModel> = [];

      console.log(data.data.chats);

      data.data.docs.forEach((element: any) => {
        payments.push({
          Id: element._id,
          paymentInfo: {
            name: element.paymentInfo.method,
            imageUrl: element.paymentInfo.method,
            email: element.paymentInfo.method,
            date: element.paymentInfo.date.split("T")[0],
            paymentStatus: element.paymentInfo.status,
            method: element.paymentInfo.method,
            amount: element.paymentInfo.amount,
            Id: element._id,
          },
        });
      });

      return payments;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
