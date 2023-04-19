import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

const completeAppointment = async ({
  appointmentId,
  amount,
  method,
}: {
  appointmentId: string;
  amount: number;
  method: string;
}) => {
  console.log(`Completing ${appointmentId}`);
  return accessClient.patch(
    `/appointment/${appointmentId}/complete_appointment`,
    {
      amount,
      method,
      date: new Date().toISOString().slice(0, -5),
      status: "COMPLETED",
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
    onError: (error) => {
      console.log(error);
    },
  });
};
