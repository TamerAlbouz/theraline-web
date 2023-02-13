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
];

const PaymentsTable = () => {
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
        bodyClassName="bg-primary"
        className="w-1/5 py-5 text-center"
        body={col.body}
      />
    );
  });

  return (
    <DataTable
      value={paymentList}
      responsiveLayout="scroll"
      autoLayout={true}
      tableClassName="w-full"
      className="rounded-md bg-primary-dark p-1"
    >
      {dynamicColumns}
    </DataTable>
  );
};

export default PaymentsTable;
