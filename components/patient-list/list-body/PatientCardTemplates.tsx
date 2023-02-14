import React from "react";
import { patientDataModel } from "../../../types/patientData";

export const basicInfoTemplate = (data: patientDataModel) => {
  return (
    <div className="my-2 flex flex-row px-2 pl-4">
      <img
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={data.imageUrl}
        alt=""
      />
      <div className="ml-4 flex flex-col">
        <p className="text-md font-bold text-white">{data.name}</p>
        <p className="text-sm text-white">{data.email}</p>
      </div>
    </div>
  );
};

export const phoneNumberTemplate = (data: patientDataModel) => {
  return (
    <div className="px-2">
      <p className="text-md text-center text-white">{data.phoneNumber}</p>
    </div>
  );
};

export const cityTemplate = (data: patientDataModel) => {
  return (
    <div className="px-2">
      <p className="text-md text-center text-white">{data.city}</p>
    </div>
  );
};

export const lastAppointmentTemplate = (data: patientDataModel) => {
  return (
    <div className="px-2">
      <p className="text-md text-center text-white">
        {data.nextAppointment ? data.nextAppointment : "-"}
      </p>
    </div>
  );
};

export const nextAppointmentTemplate = (data: patientDataModel) => {
  return (
    <div className="px-2">
      <p className="text-md text-center text-white">
        {data.lastAppointment ? data.lastAppointment : "-"}
      </p>
    </div>
  );
};
