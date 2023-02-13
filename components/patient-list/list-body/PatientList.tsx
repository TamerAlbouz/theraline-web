import {
  basicInfoTemplate,
  phoneNumberTemplate,
  cityTemplate,
  nextAppointmentTemplate,
  lastAppointmentTemplate,
} from "./PatientCardTemplates";
import { Column } from "primereact/column";
import { DataTable, DataTableRowClickEventParams } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { useRouter } from "next/router";
import { patientDataModel } from "../../../types/patientData";

const patientList: Array<patientDataModel> = [
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

const PatientList = () => {
  const router = useRouter();

  const navigateToPatient = (patientId: string) => {
    router.push(`/patient-list/${patientId}`);
  };

  const filters = {
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  };

  return (
    <DataTable
      value={patientList}
      paginator
      paginatorClassName="text-center font-bold text-primary"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      className=" overflow-x-scroll rounded-xl bg-white px-4 py-6"
      rowClassName={() =>
        "bg-gray-200 rounded-lg text-primary border-b-2 border-white cursor-pointer"
      }
      onRowClick={(rowData: DataTableRowClickEventParams) => {
        navigateToPatient(rowData.data.patientId);
      }}
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
        header="Basic Info"
        showFilterMenu={false}
        filter
        filterField="name"
        filterPlaceholder="Search by name"
        sortable
        sortField="name"
        headerClassName="text-center text-primary-dark cursor-pointer"
        body={basicInfoTemplate}
        // className="w-1/5 text-center text-primary"
      />

      <Column
        header="Phone Number"
        headerClassName="text-center text-primary-dark"
        body={phoneNumberTemplate}
        // className="w-1/5 text-center text-primary"
      />

      <Column
        header="City"
        headerClassName="text-center text-primary-dark"
        body={cityTemplate}
        // className="w-1/5 text-center text-primary"
      />

      <Column
        header="Last Appointment"
        headerClassName="text-center text-primary-dark"
        body={lastAppointmentTemplate}
        // className="w-1/5 text-center text-primary"
      />

      <Column
        header="Next Appointment"
        headerClassName="text-center text-primary-dark"
        body={nextAppointmentTemplate}
        // className="w-1/5 text-center text-primary"
      />
    </DataTable>
  );
};

export default PatientList;
