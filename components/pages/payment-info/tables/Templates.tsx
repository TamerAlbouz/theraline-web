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
  return (
    <div className="mx-4 flex items-center justify-start gap-4">
      <Image
        width={40}
        height={40}
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={
          data.imageUrl ||
          "https://www.shutterstock.com/image-vector/male-avatar-profile-picture-vector-600w-148661735.jpg"
        }
        alt="Profile Picture"
      />
      <div className="flex flex-col text-left">
        <p className="text-md font-bold">{data.fullName || "-"}</p>
        <p className="text-sm">{data.email || "-"}</p>
      </div>
    </div>
  );
};

// Consider removing this function
export const paymentAmountTemplate = (data: paymentDataModel) => {
  return <p>{data.paymentInfo?.amount || "-"}</p>;
};

// Consider removing this function
export const paymentDateTemplate = (data: paymentDataModel) => {
  return <p>{data.paymentInfo?.date.split("T")[0] || "-"}</p>;
};

// Consider removing this function
export const paymentMethodTemplate = (data: paymentDataModel) => {
  return <p>{data.paymentInfo?.method || "-"}</p>;
};

export const paymentStatusTemplate = (data: paymentDataModel) => {
  if (data.paymentInfo?.status === "PAID") {
    return (
      <p className="m-auto w-fit rounded-sm bg-green-600 py-1 px-2 font-semibold">
        {data.paymentInfo?.status || "-"}
      </p>
    );
  }
  if (data.paymentInfo?.status === "PENDING") {
    return (
      <p className="m-auto w-fit rounded-sm bg-yellow-600 py-1 px-2 font-semibold">
        {data.paymentInfo?.status || "-"}
      </p>
    );
  }
  return (
    <p className="m-auto w-fit rounded-sm bg-red-600 py-1 px-2 font-semibold">
      {data.paymentInfo?.status || "-"}
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
