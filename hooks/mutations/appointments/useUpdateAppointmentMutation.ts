import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

const updateAppointment = async ({
  appointmentId,
  amount,
  status,
}: {
  appointmentId: string;
  amount: number;
  status: string;
}) => {
  return accessClient.patch(`/appointment/${appointmentId}/edit_payment_info`, {
    amount,
    status,
  });
};

export const useUpdateAppointmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["appointments"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
};
