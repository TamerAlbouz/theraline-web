import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { appointmentsDataModel } from "../../types/appointmentsData";

export const getAppointments = async () => {
  return accessClient.get("/appointment/doctor/appointment", {
    params: {
      page: 1,
    },
  });
};

export const useAppointmentsQuery = () => {
  return useQuery(["appointments"], getAppointments, {
    select: (data: any) => {
      const appointments: Array<appointmentsDataModel> = [];

      data.data.docs.forEach((element: any) => {
        appointments.push({
          title: element._id,
          patient_id: element.patient_id,
          start: element.start_date,
          end: element.end_date,
        });
      });

      return appointments;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
