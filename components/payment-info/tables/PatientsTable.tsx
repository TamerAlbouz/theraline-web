import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { patientDataModel } from "../../../types/patientData";
import {
  basicInfoTemplate,
  cityTemplate,
  lastAppointmentTemplate,
  phoneNumberTemplate,
} from "./TablesTemplates";

const patientList: Array<patientDataModel> = [
  {
    patientId: "1",
    name: "Jane Cooper",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "test@gmail",
    phoneNumber: "78-919-933",
    city: "Beirut",
    nextAppointment: undefined,
    lastAppointment: "Mar 12, 2023",
    birthday: "Feb 2 2008",
    gender: "Female",
    memberStatus: "Active",
    nextAppointmentsCount: 1,
    previousAppointmentsCount: 2,
    registerDate: "Jun 03 2021",
    street: "Blahaj",
    zipCode: "1820372",
  },
  {
    patientId: "2",
    name: "Hailey Commet",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "test2@gmail",
    phoneNumber: "03-366-547",
    city: "Tripoli",
    nextAppointment: undefined,
    lastAppointment: "May 20, 2023",
    birthday: "Feb 2 2008",
    gender: "Female",
    memberStatus: "Active",
    nextAppointmentsCount: 1,
    previousAppointmentsCount: 0,
    registerDate: "Jun 03 2021",
    street: "Blahaj",
    zipCode: "1820372",
  },
  {
    patientId: "3",
    name: "Zach Star",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "test2@gmail",
    phoneNumber: "03-366-547",
    city: "Tripoli",
    nextAppointment: undefined,
    lastAppointment: "May 20, 2023",
    birthday: "Feb 2 2008",
    gender: "Female",
    memberStatus: "Active",
    nextAppointmentsCount: 1,
    previousAppointmentsCount: 0,
    registerDate: "Jun 03 2021",
    street: "Blahaj",
    zipCode: "1820372",
  },
  {
    patientId: "4",
    name: "Felix Pan",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "test2@gmail",
    phoneNumber: "03-366-547",
    city: "Tripoli",
    nextAppointment: undefined,
    lastAppointment: "May 20, 2023",
    birthday: "Feb 2 2008",
    gender: "Female",
    memberStatus: "Active",
    nextAppointmentsCount: 1,
    previousAppointmentsCount: 0,
    registerDate: "Jun 03 2021",
    street: "Blahaj",
    zipCode: "1820372",
  },
];

const PatientsTable = () => {
  const [selectedPatient, setSelectedPatient] = useState<patientDataModel>();

  return (
    <DataTable
      value={patientList}
      responsiveLayout="scroll"
      tableClassName="w-full"
      className="rounded-md"
    >
      <Column
        className="w-1/4 bg-secondary text-center text-white "
        body={basicInfoTemplate}
      ></Column>
      <Column
        className="w-1/4 bg-secondary text-center text-white"
        body={phoneNumberTemplate}
      ></Column>
      <Column
        className="w-1/4 bg-secondary text-center text-white"
        body={cityTemplate}
      ></Column>
      <Column
        className="w-1/4 bg-secondary text-center text-white"
        body={lastAppointmentTemplate}
      ></Column>
    </DataTable>
  );
};

export default PatientsTable;
