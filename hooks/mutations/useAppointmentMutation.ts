import { useMutation } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { appointmentsDataModel } from "../../types/appointmentsData";

const createAppointment = async (props: appointmentsDataModel) => {
  const { title, patient_id, start, end } = props;
  return accessClient.post("/appointment/create_appointment", {
    title: title,
    patient_id: patient_id,
    start_date: start,
    end_date: end,
  });
};

export const useAppointmentsMutation = () => {
  return useMutation({
    mutationFn: createAppointment,
  });
};
