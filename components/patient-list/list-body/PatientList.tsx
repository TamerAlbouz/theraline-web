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
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import { useRouter } from "next/router";
import { patientDataModel } from "../../../types/patientData";
import {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

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

function PatientList() {
  const router = useRouter();

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

  const paginatorTemplate = {
    layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
    PrevPageLink: (options: {
      className: string | undefined;
      onClick: MouseEventHandler<HTMLButtonElement> | undefined;
      disabled: boolean | undefined;
    }) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3 font-bold text-textColor hover:text-tertiary">
            Previous
          </span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options: {
      className: string | undefined;
      onClick: MouseEventHandler<HTMLButtonElement> | undefined;
      disabled: boolean | undefined;
    }) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3 font-bold text-textColor hover:text-tertiary">
            Next
          </span>
          <Ripple />
        </button>
      );
    },
    PageLinks: (options: {
      view: { startPage: number; endPage: any };
      page: number;
      totalPages: any;
      className: string | undefined;
      onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    }) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true });

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        );
      }

      return (
        <button
          type="button"
          className={options.className + " mx-2 font-bold text-textColor"}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
    CurrentPageReport: (options: {
      first:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
      last:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
      totalRecords:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
    }) => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            userSelect: "none",
            width: "120px",
            textAlign: "center",
          }}
          className="mx-6 text-textColor"
        >
          Showing {options.first} - {options.last} of {options.totalRecords}
        </span>
      );
    },
  };

  return (
    <DataTable
      value={patientList}
      paginator
      paginatorTemplate={paginatorTemplate}
      paginatorClassName="py-2"
      rows={3}
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
