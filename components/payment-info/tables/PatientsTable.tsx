import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { patientDataModel } from "../../../types/patientData";
import {
  basicInfoTemplate,
  cityTemplate,
  lastAppointmentTemplate,
  phoneNumberTemplate,
} from "./Templates";
import { createRandomPatient } from "../../faker/patient";

const patients: Array<patientDataModel> = [
  createRandomPatient(),
  createRandomPatient(),
  createRandomPatient(),
  createRandomPatient(),
];

function PatientsTable() {
  const [patientList, setPatientList] = useState<Array<patientDataModel>>();

  useEffect(() => {
    setPatientList(patients);
  }, []);

  const columns = [
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
        className="relative w-1/5 text-center text-textColor"
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
      <Column
        key={1}
        className="relative w-2/5 text-center text-textColor"
        body={basicInfoTemplate}
      />
      {dynamicColumns}
    </DataTable>
  );
}

export default PatientsTable;
