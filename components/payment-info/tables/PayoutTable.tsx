import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { paymentDataModel } from "../../../types/paymentData";
import {
  paymentAmountTemplate,
  paymentDateTemplate,
  paymentMethodTemplate,
  paymentNoteTemplate,
  paymentStatusTemplate,
} from "./TablesTemplates";

const paymentList: Array<paymentDataModel> = [
  {
    paymentId: "1",
    date: "Nov 01, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFV80127HL22",
    amount: "$257,90",
  },
  {
    paymentId: "2",
    date: "Nov 02, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "3",
    date: "Nov 03, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "4",
    date: "Nov 04, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
];

const PayoutTable = () => {
  const columns = [
    { id: 1, header: "Date", body: paymentDateTemplate },
    { id: 2, header: "Paid", body: paymentStatusTemplate },
    { id: 3, header: "Method", body: paymentMethodTemplate },
    { id: 4, header: "Notes", body: paymentNoteTemplate },
    { id: 5, header: "Amount", body: paymentAmountTemplate },
  ];

  const dynamicColumns = columns.map((col) => {
    return (
      <Column
        key={col.id}
        header={col.header}
        headerClassName="p-3 bg-primary-dark text-xl"
        className="w-1/5 py-5 text-center"
        body={col.body}
      />
    );
  });

  return (
    <DataTable
      value={paymentList}
      responsiveLayout="scroll"
      autoLayout
      tableClassName="w-full"
      className="rounded-md bg-primary-dark p-1"
      rows={3}
      paginator
      rowClassName={(rowData) => {
        return "hover:bg-secondary bg-primary cursor-pointer transition duration-300 ease-in-out";
      }}
    >
      {dynamicColumns}
    </DataTable>
  );
};

export default PayoutTable;
