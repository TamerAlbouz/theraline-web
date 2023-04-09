import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { clinicInfoModel } from "../../types/clinicInfo";

export const getClinic = async () => {
  return accessClient.get("/user/clinicInfo");
};

export const useClinicQuery = () => {
  return useQuery(["clinicInfo"], getClinic, {
    select: (data: any) => {
      const clinicInfo: clinicInfoModel = {
        name: data.data.clinicInfo.name,
        location: data.data.clinicInfo.location,
        phone: data.data.clinicInfo.phone,
      };

      return clinicInfo;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
