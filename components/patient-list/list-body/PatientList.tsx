import {
  basicInfoTemplate,
  phoneNumberTemplate,
  cityTemplate,
  nextAppointmentTemplate,
  lastAppointmentTemplate,
  headerTemplate,
} from "./PatientCardTemplates";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/lara-dark-blue/theme.css";

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

const patientList: Array<patientData> = [
  {
    patientId: "1",
    name: "Jane Cooper",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "test@gmail",
    phoneNumber: "78-919-933",
    city: "Beirut",
    nextAppointment: "Mar 12, 2023",
    lastAppointment: null,
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
  },
];

const PatientList = () => {
  const filters = {
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  };

  return (
    <div className="pb-4">
      <DataTable
        value={patientList}
        paginator
        paginatorClassName="text-center font-bold text-primary"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        className="overflow-x-scroll rounded-lg px-4 py-6"
        cellClassName={() => "bg-primary-dark"}
        rows={3}
        removableSort
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        responsiveLayout="scroll"
        emptyMessage="No patients found."
      >
        <Column
          field="basicInfo"
          header={() => headerTemplate("Basic Info", true)}
          showFilterMenu={false}
          filter
          filterField="name"
          filterPlaceholder="Search by name"
          sortable
          sortField="name"
          body={basicInfoTemplate}
          className="w-1/5 px-2"
        />

        <Column
          header="Phone Number"
          body={phoneNumberTemplate}
          className="w-1/5 px-2 text-center"
        />

        <Column
          header="City"
          body={cityTemplate}
          className="w-1/5 px-2 text-center"
        />

        <Column
          header="Last Appointment"
          body={lastAppointmentTemplate}
          sortable
          sortField="name"
          className="w-1/5 px-2 text-center"
        />

        <Column
          header="Next Appointment"
          body={nextAppointmentTemplate}
          sortable
          sortField="name"
          className="w-1/5 px-2 text-center"
        />
      </DataTable>
    </div>
  );
};

export default PatientList;
