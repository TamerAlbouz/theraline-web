import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

const completeAppointment = async ({
  appointmentId,
  amount,
  method,
  status,
}: {
  appointmentId: string;
  amount: number;
  method: string;
  status: string;
}) => {
  console.log(`Completing ${appointmentId}`);
  return accessClient.patch(
    `/appointment/${appointmentId}/complete_appointment`,
    {
      amount,
      method,
      date: new Date().toISOString().slice(0, -5),
      status: status,
    },
  );
};

export const useCompleteAppointmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeAppointment,
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
