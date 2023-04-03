import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { paymentDataModel } from "../../../../types/paymentData";
import {
  paginatorTemplate,
  paymentAmountTemplate,
  paymentDateTemplate,
  paymentMethodTemplate,
  paymentPatientTemplate,
  paymentStatusTemplate,
} from "./Templates";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { createPayments } from "../../../../utils/components/payment-utils";

const PayoutTable = () => {
  const [visible, setVisible] = useState(false);
  const [paymentList, setPaymentList] = useState<Array<paymentDataModel>>([]);

  useEffect(() => {
    setPaymentList(createPayments(50));
  }, []);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const columns = [
    { id: 1, header: "Patient", body: paymentPatientTemplate },
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
        className="w-1/5 py-5 text-center"
        body={col.body}
      />
    );
  });

  const headerTemplate = () => {
    return (
      <div className="flex items-center justify-between pl-5">
        <span className="text-2xl font-semibold text-textColor">Payouts</span>
        <span className="m-2 flex items-center justify-center gap-3 ">
          <i className="pi pi-search text-xl text-textColor" />
          <InputText
            className="rounded-md bg-primary p-3 text-textColor"
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  return (
    <>
      <DataTable
        dataKey="id"
        value={paymentList}
        responsiveLayout="scroll"
        autoLayout
        tableClassName="w-full"
        className="rounded-md bg-primary-dark p-1"
        paginatorClassName="flex justify-center items-center gap-3 text-xl py-3"
        rows={7}
        header={headerTemplate}
        filters={filters}
        globalFilterFields={[
          "name",
          "email",
          "paymentStatus",
          "date",
          "method",
          "amount",
        ]}
        emptyMessage="No results found."
        paginator
        paginatorTemplate={paginatorTemplate}
        onRowClick={(e) => {
          setVisible(true);
        }}
        rowClassName={(rowData) => {
          return "hover:bg-secondary bg-primary cursor-pointer transition duration-300 ease-in-out";
        }}
      >
        {dynamicColumns}
      </DataTable>
      {/* <Dialog
        header="Header"
        className="bg-red-500 text-textColor backdrop:bg-gray-50 "
        visible={visible}
        footer={renderFooter}
        onHide={onHide}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog> */}
    </>
  );
};

export default PayoutTable;
