import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import React, {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { patientDataModel } from "../../../types/patientData";
import { paymentDataModel } from "../../../types/paymentData";

export const basicInfoTemplate = (data: patientDataModel) => {
  return (
    <div className="my-1 -mr-1 flex flex-row rounded-l-md bg-primary py-4 px-2 pl-4">
      <img
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={data.imageUrl}
        alt=""
      />
      <div className="ml-4 flex flex-col text-left">
        <p className="text-md font-bold ">{data.name}</p>
        <p className="text-sm">{data.email}</p>
      </div>
    </div>
  );
};

export const phoneNumberTemplate = (data: patientDataModel) => {
  return (
    <div className="-mr-1 bg-primary px-2 py-7">
      <p className="text-md">{data.phoneNumber}</p>
    </div>
  );
};

export const cityTemplate = (data: patientDataModel) => {
  return (
    <div className="-mr-1 bg-primary px-2 py-7">
      <p className="text-md">{data.city}</p>
    </div>
  );
};

export const lastAppointmentTemplate = (data: patientDataModel) => {
  return (
    <div className="rounded-r-md bg-primary px-2 py-7">
      <p className="text-md">{data.lastAppointment}</p>
    </div>
  );
};

export const paymentAmountTemplate = (data: paymentDataModel) => {
  return <p>{data.amount}</p>;
};

export const paymentDateTemplate = (data: paymentDataModel) => {
  return <p>{data.date}</p>;
};

export const paymentMethodTemplate = (data: paymentDataModel) => {
  return <p>{data.method}</p>;
};

export const paymentNoteTemplate = (data: paymentDataModel) => {
  return <p>{data.note}</p>;
};

export const paymentStatusTemplate = (data: paymentDataModel) => {
  if (data.paymentStatus === "Paid") {
    return (
      <p className="m-auto w-fit rounded-sm bg-green-600 py-1 px-2 font-semibold">
        {data.paymentStatus}
      </p>
    );
  } else if (data.paymentStatus === "Pending") {
    return (
      <p className="m-auto w-fit rounded-sm bg-yellow-600 py-1 px-2 font-semibold">
        {data.paymentStatus}
      </p>
    );
  } else {
    return (
      <p className="m-auto w-fit rounded-sm bg-red-600 py-1 px-2 font-semibold">
        {data.paymentStatus}
      </p>
    );
  }
};

export const paginatorTemplate = {
  layout:
    "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport",
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
        className={
          options.className + " mx-3 pb-1 text-lg font-bold text-textColor"
        }
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
        }}
        className="mx-6 w-fit text-center text-base text-textColor"
      >
        Showing {options.first} - {options.last} of {options.totalRecords}
      </span>
    );
  },
};
