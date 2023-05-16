import { useMutation } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

const emailAppointment = async ({
  appointmentId,
}: {
  appointmentId: string;
}) => {
  return accessClient.post(`/appointment/${appointmentId}/export_appointment`);
};

export const useEmailAppointmentMutation = () => {
  return useMutation({
    mutationFn: emailAppointment,
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
