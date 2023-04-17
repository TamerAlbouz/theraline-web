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
import { patientDataModel } from "../../../../types/patientData";

export const basicInfoTemplate = (data: patientDataModel) => {
  const { imageUrl, name, email } = data;
  return (
    <div className="my-2 flex flex-row px-2 py-2 pl-4">
      <Image
        width={40}
        height={40}
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={imageUrl}
        alt="Avatar"
      />
      <div className="ml-4 flex flex-col">
        <p className="text-md font-bold text-textColor">{name}</p>
        <p className="text-sm text-textColor">{email}</p>
      </div>
    </div>
  );
};

export const phoneNumberTemplate = (data: patientDataModel) => {
  const { phoneNumber } = data;
  return (
    <div className="px-2">
      <p className="text-md text-center text-textColor">{phoneNumber}</p>
    </div>
  );
};

export const cityTemplate = (data: patientDataModel) => {
  const { city } = data;
  return (
    <div className="px-2">
      <p className="text-md text-center text-textColor">{city}</p>
    </div>
  );
};

export const lastAppointmentTemplate = (data: patientDataModel) => {
  const { nextAppointment } = data;
  return (
    <div className="px-2">
      <p className="text-md text-center text-textColor">
        {/* eslint-disable-next-line no-unneeded-ternary */}
        {nextAppointment ? nextAppointment : "-"}
      </p>
    </div>
  );
};

export const nextAppointmentTemplate = (data: patientDataModel) => {
  const { lastAppointment } = data;
  return (
    <div className="px-2">
      <p className="text-md text-center text-textColor">
        {/* eslint-disable-next-line no-unneeded-ternary */}
        {lastAppointment ? lastAppointment : "-"}
      </p>
    </div>
  );
};

export const paginatorTemplate = {
  layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
  PrevPageLink: (options: {
    className: string | undefined;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled: boolean | undefined;
  }) => {
    const { className, onClick, disabled } = options;
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
        disabled={disabled}>
        <span className="p-3 font-bold text-textColor hover:text-tertiary">
          Previous
        </span>
        <Ripple />
      </button>
    );
  },
  NextPageLink: (options: {
    className: string | undefined;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled: boolean | undefined;
  }) => {
    const { className, onClick, disabled } = options;
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
        disabled={disabled}>
        <span className="p-3 font-bold text-textColor hover:text-tertiary">
          Next
        </span>
        <Ripple />
      </button>
    );
  },
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
        className={`${className} mx-2 font-bold text-textColor`}
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
          width: "120px",
          textAlign: "center",
        }}
        className="mx-6 text-textColor">
        Showing {first} - {last} of {totalRecords}
      </span>
    );
  },
};
