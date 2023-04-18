import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";

const createAppointment = async ({
  title,
  patient_id,
  start_date,
  end_date,
}: {
  title: string;
  patient_id: string;
  start_date: string;
  end_date: string;
}) => {
  return accessClient.post("/appointment/create_appointment", {
    title,
    patient_id,
    start_date,
    end_date,
  });
};

export const useCreateAppointmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAppointment,
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
