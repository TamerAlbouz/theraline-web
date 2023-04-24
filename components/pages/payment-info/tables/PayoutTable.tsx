import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import {
  paginatorTemplate,
  paymentAmountTemplate,
  paymentDateTemplate,
  paymentMethodTemplate,
  paymentPatientTemplate,
  paymentStatusTemplate,
} from "./Templates";
import { usePaymentQuery } from "../../../../hooks/payment-info/usePaymentQuery";

const columns = [
  { id: 1, header: "Patient", body: paymentPatientTemplate },
  { id: 2, header: "Paid", body: paymentStatusTemplate },
  { id: 3, header: "Date", body: paymentDateTemplate },
  { id: 4, header: "Method", body: paymentMethodTemplate },
  { id: 5, header: "Amount", body: paymentAmountTemplate },
];

function PayoutTable() {
  const { data } = usePaymentQuery();
  const [payments, setPayments] = useState<any>([]);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e: any) => {
    const { value } = e.target;
    const flts = { ...filters };
    flts.global.value = value;

    setFilters(flts);
    setGlobalFilterValue(value);
  };

  // update table data when data changes
  useEffect(() => {
    setPayments(data);

    // update filters when data changes
  }, [data]);

  const dynamicColumns = columns.map((col) => {
    return (
      <Column
        key={col.id}
        header={col.header}
        headerClassName="p-3 bg-primary-dark text-xl"
        className="w-1/12 py-5 text-center"
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
    <DataTable
      dataKey="id"
      value={payments}
      responsiveLayout="scroll"
      autoLayout
      tableClassName="w-full"
      className="h-full rounded-md bg-primary-dark p-1"
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
      rowClassName={() => {
        return "hover:bg-secondary bg-primary cursor-pointer transition duration-300 ease-in-out";
      }}>
      {dynamicColumns}
    </DataTable>
  );
}

export default PayoutTable;
