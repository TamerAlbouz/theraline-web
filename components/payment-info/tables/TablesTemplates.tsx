import React from "react";
import { patientDataModel } from "../../../types/patientData";
import { paymentDataModel } from "../../../types/paymentData";

export const basicInfoTemplate = (data: patientDataModel) => {
  return (
    <div className="my-1 -mr-1 flex flex-row rounded-l-md bg-primary py-4 px-2 pl-4">
      <img
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={data.imageUrl}
        alt=""
      />
      <div className="ml-4 flex flex-col text-left">
        <p className="text-md font-bold ">{data.name}</p>
        <p className="text-sm">{data.email}</p>
      </div>
    </div>
  );
};

export const phoneNumberTemplate = (data: patientDataModel) => {
  return (
    <div className="-mr-1 bg-primary px-2 py-7">
      <p className="text-md">{data.phoneNumber}</p>
    </div>
  );
};

export const cityTemplate = (data: patientDataModel) => {
  return (
    <div className="-mr-1 bg-primary px-2 py-7">
      <p className="text-md">{data.city}</p>
    </div>
  );
};

export const lastAppointmentTemplate = (data: patientDataModel) => {
  return (
    <div className="rounded-r-md bg-primary px-2 py-7">
      <p className="text-md">{data.lastAppointment}</p>
    </div>
  );
};

export const paymentAmountTemplate = (data: paymentDataModel) => {
  return <p className="">{data.amount}</p>;
};

export const paymentDateTemplate = (data: paymentDataModel) => {
  return <p className="">{data.date}</p>;
};

export const paymentMethodTemplate = (data: paymentDataModel) => {
  return <p className="">{data.method}</p>;
};

export const paymentNoteTemplate = (data: paymentDataModel) => {
  return <p className="">{data.note}</p>;
};

export const paymentStatusTemplate = (data: paymentDataModel) => {
  return (
    <p className="m-auto w-fit rounded-sm bg-green-600 py-1 px-2 font-semibold">
      {data.paymentStatus}
    </p>
  );
};
