import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { paymentDataModel } from "../../../types/paymentData";
import {
  paginatorTemplate,
  paymentAmountTemplate,
  paymentDateTemplate,
  paymentMethodTemplate,
  paymentNoteTemplate,
  paymentStatusTemplate,
} from "./Templates";
import { useRouter } from "next/router";

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
  {
    paymentId: "5",
    date: "Nov 05, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "6",
    date: "Nov 06, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "7",
    date: "Nov 07, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "8",
    date: "Nov 08, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "9",
    date: "Nov 09, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "10",
    date: "Nov 10, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "11",
    date: "Nov 11, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "12",
    date: "Nov 12, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
  {
    paymentId: "13",
    date: "Nov 13, 2019",
    paymentStatus: "Paid",
    method: "Bank",
    note: "SFG81237PL99",
    amount: "$207,80",
  },
];

const PayoutTable = () => {
  const [first, setFirst] = useState(0);
  const router = useRouter();

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
      paginatorClassName="flex justify-center items-center gap-3 text-xl py-3"
      rows={9}
      paginator
      paginatorTemplate={paginatorTemplate}
      onRowClick={(e) => {
        router.push(`/payment-info/payouts/${e.data.paymentId}`);
      }}
      rowClassName={(rowData) => {
        return "hover:bg-secondary bg-primary cursor-pointer transition duration-300 ease-in-out";
      }}
    >
      {dynamicColumns}
    </DataTable>
  );
};

export default PayoutTable;
