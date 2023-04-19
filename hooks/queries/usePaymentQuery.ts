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
  return useQuery(["paymentInfo"], getPayment, {
    select: (data: any) => {
      const payments: Array<paymentDataModel> = [];

      console.log(data.data.chats);

      data.data.docs.forEach((element: any) => {
        payments.push({
          Id: element._id,
          patient_id: element.patient_id,
          paymentInfo: {
            name: element.paymentInfo.method,
            imageUrl:
              "https://www.shutterstock.com/image-vector/male-avatar-profile-picture-vector-600w-148661735.jpg",
            email: element.paymentInfo.method,
            date: element.paymentInfo.date.split("T")[0],
            paymentStatus: element.paymentInfo.status,
            method: element.paymentInfo.method,
            amount: element.paymentInfo.amount,
            Id: element.paymentInfo._id,
          },
        });
      });

      return payments;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
