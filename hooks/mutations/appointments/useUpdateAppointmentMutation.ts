import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

const updateAppointment = async ({
  appointmentId,
  amount,
  status,
}: {
  appointmentId: string;
  amount: number;
  status: string;
}) => {
  return accessClient.patch(
    `/appointment/${appointmentId}/edit_payment_info`,
    { amount, status },
  );
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
    onError: (error) => {
      console.log(error);
    },
  });
};
