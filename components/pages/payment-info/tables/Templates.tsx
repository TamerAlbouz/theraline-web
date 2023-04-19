import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import React, {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import Image from "next/image";

import { paymentDataModel } from "../../../../types/paymentData";

export const paymentPatientTemplate = (data: paymentDataModel) => {
  const { imageUrl, name, email } = data.paymentInfo;
  return (
    <div className="mx-4 flex items-center justify-start gap-4">
      <Image
        width={40}
        height={40}
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={imageUrl}
        alt="Profile Picture"
      />
      <div className="flex flex-col text-left">
        <p className="text-md font-bold">{name}</p>
        <p className="text-sm">{email}</p>
      </div>
    </div>
  );
};

// Consider removing this function
export const paymentAmountTemplate = (data: paymentDataModel) => {
  const { amount } = data.paymentInfo;
  return <p>{amount}</p>;
};

// Consider removing this function
export const paymentDateTemplate = (data: paymentDataModel) => {
  const { date } = data.paymentInfo;
  return <p>{date}</p>;
};

// Consider removing this function
export const paymentMethodTemplate = (data: paymentDataModel) => {
  const { method } = data.paymentInfo;
  return <p>{method}</p>;
};

export const paymentStatusTemplate = (data: paymentDataModel) => {
  const { paymentStatus } = data.paymentInfo;
  if (paymentStatus === "Paid") {
    return (
      <p className="m-auto w-fit rounded-sm bg-green-600 py-1 px-2 font-semibold">
        {paymentStatus}
      </p>
    );
  }
  if (paymentStatus === "Pending") {
    return (
      <p className="m-auto w-fit rounded-sm bg-yellow-600 py-1 px-2 font-semibold">
        {paymentStatus}
      </p>
    );
  }
  return (
    <p className="m-auto w-fit rounded-sm bg-red-600 py-1 px-2 font-semibold">
      {paymentStatus}
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
    const { view, page, totalPages, className, onClick } = options;
    const { startPage, endPage } = view;
    if (
      (startPage === page && startPage !== 0) ||
      (endPage === page && page + 1 !== totalPages)
    ) {
      const classN = classNames(className, { "p-disabled": true });

      return (
        <span className={classN} style={{ userSelect: "none" }}>
          ...
        </span>
      );
    }

    return (
      <button
        type="button"
        className={`${className} mx-3 pb-1 text-lg font-bold text-textColor`}
        onClick={onClick}>
        {page + 1}
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
    const { first, last, totalRecords } = options;
    return (
      <span
        style={{
          color: "var(--text-color)",
          userSelect: "none",
        }}
        className="mx-6 w-fit text-center text-base text-textColor">
        Showing {first} - {last} of {totalRecords}
      </span>
    );
  },
};
