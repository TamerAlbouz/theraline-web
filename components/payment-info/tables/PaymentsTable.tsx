import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { patientDataModel } from "../../../types/patientData";
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
  return (
    <DataTable
      value={paymentList}
      responsiveLayout="scroll"
      autoLayout={true}
      tableClassName="w-full"
      className="rounded-md bg-primary-dark p-1"
    >
      <Column
        header="Date"
        headerClassName="p-3 bg-primary-dark text-xl"
        bodyClassName="bg-primary"
        className="w-1/5 py-5 text-center"
        body={paymentDateTemplate}
      ></Column>
      <Column
        header="Paid"
        headerClassName="p-3 bg-primary-dark text-xl"
        bodyClassName="bg-primary"
        className="w-1/5 py-5 text-center"
        body={paymentStatusTemplate}
      ></Column>
      <Column
        header="Method"
        headerClassName="p-3 bg-primary-dark text-xl"
        bodyClassName="bg-primary"
        className="w-1/5 py-5 text-center"
        body={paymentMethodTemplate}
      ></Column>
      <Column
        header="Notes"
        headerClassName="p-3 bg-primary-dark text-xl"
        bodyClassName="bg-primary"
        className="w-1/5 py-5 text-center"
        body={paymentNoteTemplate}
      ></Column>
      <Column
        header="Amount"
        headerClassName="p-3 bg-primary-dark text-xl"
        bodyClassName="bg-primary"
        className="w-1/5 py-5 text-center"
        body={paymentAmountTemplate}
      ></Column>
    </DataTable>
  );
};

export default PaymentsTable;
