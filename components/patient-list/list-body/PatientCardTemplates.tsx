import React from "react";
import CardOptionsButton from "./CardOptionsButton";

type patientData = {
  patientId: string;
  name: string;
  imageUrl: string;
  email: string;
  phoneNumber: string;
  city: string;
  nextAppointment: string | undefined | null;
  lastAppointment: string | undefined | null;
};

export const basicInfoTemplate = (data: patientData) => {
  return (
    <div className="my-2 flex flex-row px-2 pl-4">
      <img
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={data.imageUrl}
        alt=""
      />
      <div className="ml-4 flex flex-col">
        <p className="text-md font-bold ">{data.name}</p>
        <p className="text-sm">{data.email}</p>
      </div>
    </div>
  );
};

export const phoneNumberTemplate = (data: patientData) => {
  return (
    <div className="px-2">
      <p className="text-md">{data.phoneNumber}</p>
    </div>
  );
};

export const cityTemplate = (data: patientData) => {
  return (
    <div className="px-2">
      <p className="text-md">{data.city}</p>
    </div>
  );
};

export const lastAppointmentTemplate = (data: patientData) => {
  return (
    <div className="px-2">
      <p className="text-md">
        {data.nextAppointment ? data.nextAppointment : "-"}
      </p>
    </div>
  );
};

export const nextAppointmentTemplate = (data: patientData) => {
  return (
    <div className="px-2">
      <p className="text-md">
        {data.lastAppointment ? data.lastAppointment : "-"}
      </p>
    </div>
  );
};

const PatientCardTemplates = (props: {
  patientId: string;
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  nextAppointment: string | null | undefined;
  lastAppointment: string | null | undefined;
}) => {
  return (
    <div className="mx-6 my-2 grid  grid-cols-3 items-center rounded-lg bg-primary-dark bg-opacity-95 py-3 px-4 text-white shadow hover:bg-primary sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
      <div className="col-span-2 flex cursor-pointer flex-row">
        <img
          className="h-10 w-10 rounded-full md:h-12 md:w-12"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="ml-4 flex flex-col">
          <p className="text-md font-bold ">{props.name}</p>
          <p className="text-sm">{props.email}</p>
        </div>
      </div>

      <p className="text-md hidden lg:block">{props.phoneNumber}</p>
      <p className="text-md hidden lg:block">{props.city}</p>
      <p className="text-md hidden sm:block">
        {props.nextAppointment ? props.nextAppointment : "-"}
      </p>
      <p className="text-md hidden md:block">
        {props.lastAppointment ? props.lastAppointment : "-"}
      </p>
      <div className="text-md">
        <CardOptionsButton />
      </div>
    </div>
  );
};
