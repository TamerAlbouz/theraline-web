import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

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
