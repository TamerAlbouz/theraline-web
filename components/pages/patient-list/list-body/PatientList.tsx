import {
  basicInfoTemplate,
  phoneNumberTemplate,
  cityTemplate,
  nextAppointmentTemplate,
  lastAppointmentTemplate,
  paginatorTemplate,
} from "./PatientCardTemplates";
import { Column } from "primereact/column";
import { DataTable, DataTableRowClickEventParams } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { patientDataModel } from "../../../../types/patientData";
import { createPatients } from "../../../../utils/components/patient-utils";

function PatientList() {
  const [patientList, setPatientList] = useState<Array<patientDataModel>>();
  const router = useRouter();

  useEffect(() => {
    setPatientList(createPatients(50));
  }, []);

  const navigateToPatient = (patientId: string) => {
    router.push(`/patient-list/${patientId}`);
  };

  const filters = {
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  };

  const columns = [
    { id: 1, header: "Basic Info", sortable: true, body: basicInfoTemplate },
    {
      id: 2,
      header: "Phone Number",
      sortable: false,
      body: phoneNumberTemplate,
    },
    { id: 3, header: "City", sortable: false, body: cityTemplate },
    {
      id: 4,
      header: "Last Appointment",
      sortable: false,
      body: lastAppointmentTemplate,
    },
    {
      id: 5,
      header: "Next Appointment",
      sortable: false,
      body: nextAppointmentTemplate,
    },
  ];

  return (
    <DataTable
      value={patientList}
      paginator
      paginatorTemplate={paginatorTemplate}
      paginatorClassName="py-2"
      rows={7}
      onRowClick={(rowData: DataTableRowClickEventParams) => {
        navigateToPatient(rowData.data.patientId);
      }}
      responsiveLayout="scroll"
      autoLayout
      tableClassName="w-full"
      className="w-full rounded-md bg-primary-dark p-1"
      rowClassName={(rowData) => {
        return "hover:bg-secondary bg-primary cursor-pointer transition duration-200 ease-in-out";
      }}
      removableSort
      dataKey="id"
      filters={filters}
    >
      {columns.map((col) => {
        if (col.sortable) {
          return (
            <Column
              key={col.id}
              header={col.header}
              headerClassName="p-3 bg-primary-dark text-xl text-textColor w-12"
              className="my-5 w-1/5"
              body={col.body}
              sortable
              sortField="name"
            />
          );
        }

        return (
          <Column
            key={col.id}
            header={col.header}
            headerClassName="p-3 bg-primary-dark text-xl text-textColor"
            className="w-1/5 py-5"
            body={col.body}
          />
        );
      })}
    </DataTable>
  );
}

export default PatientList;
