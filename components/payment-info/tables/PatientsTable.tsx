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

function PatientsTable() {
  const [selectedPatient, setSelectedPatient] = useState<patientDataModel>();

  const columns = [
    {
      id: 1,
      body: basicInfoTemplate,
    },
    {
      id: 2,
      body: phoneNumberTemplate,
    },
    {
      id: 3,
      body: cityTemplate,
    },
    { id: 4, body: lastAppointmentTemplate },
  ];

  const dynamicColumns = columns.map((col) => {
    return (
      <Column
        key={col.id}
        className="relative w-1/4 text-center text-textColor"
        body={col.body}
      />
    );
  });

  return (
    <DataTable
      value={patientList}
      responsiveLayout="scroll"
      tableClassName="w-full"
      className="rounded-md"
      rowClassName={(rowData) => {
        return "cursor-pointer";
      }}
    >
      {dynamicColumns}
    </DataTable>
  );
}

export default PatientsTable;
