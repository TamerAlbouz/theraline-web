import { Column } from "primereact/column";
import { DataTable, DataTableRowClickEventParams } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { useRouter } from "next/router";
import {
  basicInfoTemplate,
  phoneNumberTemplate,
  nextAppointmentTemplate,
  lastAppointmentTemplate,
  paginatorTemplate,
} from "./PatientCardTemplates";
import usePatientListQuery from "../../../../hooks/queries/patient-list/usePatientListQuery";

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
  {
    id: 3,
    header: "Last Appointment",
    sortable: false,
    body: lastAppointmentTemplate,
  },
  {
    id: 4,
    header: "Next Appointment",
    sortable: false,
    body: nextAppointmentTemplate,
  },
];

function PatientList() {
  const { data } = usePatientListQuery();

  const router = useRouter();

  const navigateToPatient = (patientId: string) => {
    router.push(`/patient-list/${patientId}`);
  };

  return (
    <DataTable
      value={data}
      paginator
      paginatorTemplate={paginatorTemplate}
      paginatorClassName="py-2"
      rows={20}
      onRowClick={(rowData: DataTableRowClickEventParams) => {
        navigateToPatient(rowData.data._id);
      }}
      responsiveLayout="scroll"
      autoLayout
      tableClassName="w-full"
      className="w-full rounded-md bg-primary-dark p-1"
      rowClassName={() => {
        return "hover:bg-secondary bg-primary cursor-pointer transition duration-200 ease-in-out";
      }}
      removableSort
      dataKey="id"
      filters={filters}>
      {columns.map((col) => {
        if (col.sortable) {
          return (
            <Column
              key={col.id}
              header={col.header}
              headerClassName="p-3 bg-primary-dark text-xl text-textColor w-12"
              className="my-5 w-1/4"
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
            className="w-1/4 py-5"
            body={col.body}
          />
        );
      })}
    </DataTable>
  );
}

export default PatientList;
