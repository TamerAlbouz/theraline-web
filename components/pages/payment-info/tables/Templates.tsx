import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import React, {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { paymentDataModel } from "../../../../types/paymentData";
import Image from "next/image";

export const paymentPatientTemplate = (data: paymentDataModel) => {
  return (
    <div className="mx-4 flex items-center justify-start gap-4">
      <img
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={data.paymentInfo.imageUrl}
        alt=""
      />
      <div className="flex flex-col text-left">
        <p className="text-md font-bold ">{data.paymentInfo.name}</p>
        <p className="text-sm">{data.paymentInfo.email}</p>
      </div>
    </div>
  );
};

// Consider removing this function
export const paymentAmountTemplate = (data: paymentDataModel) => {
  return <p>{data.paymentInfo.amount}</p>;
};

// Consider removing this function
export const paymentDateTemplate = (data: paymentDataModel) => {
  return <p>{data.paymentInfo.date}</p>;
};

// Consider removing this function
export const paymentMethodTemplate = (data: paymentDataModel) => {
  return <p>{data.paymentInfo.method}</p>;
};

export const paymentStatusTemplate = (data: paymentDataModel) => {
  if (data.paymentInfo.paymentStatus === "Paid") {
    return (
      <p className="m-auto w-fit rounded-sm bg-green-600 py-1 px-2 font-semibold">
        {data.paymentInfo.paymentStatus}
      </p>
    );
  }
  if (data.paymentInfo.paymentStatus === "Pending") {
    return (
      <p className="m-auto w-fit rounded-sm bg-yellow-600 py-1 px-2 font-semibold">
        {data.paymentInfo.paymentStatus}
      </p>
    );
  }
  return (
    <p className="m-auto w-fit rounded-sm bg-red-600 py-1 px-2 font-semibold">
      {data.paymentInfo.paymentStatus}
    </p>
  );
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
        className={`${options.className} mx-3 pb-1 text-lg font-bold text-textColor`}
        onClick={options.onClick}>
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
        className="mx-6 w-fit text-center text-base text-textColor">
        Showing {options.first} - {options.last} of {options.totalRecords}
      </span>
    );
  },
};
