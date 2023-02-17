import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { paymentDataModel } from "../../../types/paymentData";
import {
  paymentAmountTemplate,
  paymentDateTemplate,
  paymentMethodTemplate,
  paymentPatientTemplate,
  paymentStatusTemplate,
} from "./Templates";
import { createRandomPayment } from "../../faker/payment";

const payments: Array<paymentDataModel> = [
  createRandomPayment(),
  createRandomPayment(),
];

const PaymentsTable = () => {
  const [paymentList, setPaymentList] = useState<Array<paymentDataModel>>();

  useEffect(() => {
    setPaymentList(payments);
  }, []);

  const columns = [
    { id: 2, header: "Paid", body: paymentStatusTemplate },
    { id: 3, header: "Date", body: paymentDateTemplate },
    { id: 4, header: "Method", body: paymentMethodTemplate },
    { id: 5, header: "Amount", body: paymentAmountTemplate },
  ];

  const dynamicColumns = columns.map((col) => {
    return (
      <Column
        key={col.id}
        header={col.header}
        headerClassName="p-3 bg-primary-dark text-xl"
        className="w-auto py-5 text-center"
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
      rowClassName={(rowData) => {
        return "hover:bg-secondary bg-primary cursor-pointer transition duration-300 ease-in-out";
      }}
    >
      <Column
        key={1}
        header={"Patient"}
        headerClassName="py-3 bg-primary-dark text-xl"
        className="w-4/12 py-5"
        body={paymentPatientTemplate}
      />
      {dynamicColumns}
    </DataTable>
  );
};

export default PaymentsTable;
