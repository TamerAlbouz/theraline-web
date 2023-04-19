import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

const cancelAppointment = async (appointmentId: string) => {
  console.log(`cancelling ${appointmentId}`);
  return accessClient.patch(`/appointment/${appointmentId}/cancel_appointment`);
};

export const useCancelAppointmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelAppointment,
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
