import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import React, {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { patientDataModel } from "../../../../types/patientData";

export const basicInfoTemplate = (data: patientDataModel) => {
  return (
    <div className="my-2 flex flex-row px-2 py-2 pl-4">
      <img
        className="h-10 w-10 rounded-full md:h-12 md:w-12"
        src={data.imageUrl}
        alt=""
      />
      <div className="ml-4 flex flex-col">
        <p className="text-md font-bold text-textColor">{data.name}</p>
        <p className="text-sm text-textColor">{data.email}</p>
      </div>
    </div>
  );
};

export const phoneNumberTemplate = (data: patientDataModel) => {
  return (
    <div className="px-2">
      <p className="text-md text-center text-textColor">{data.phoneNumber}</p>
    </div>
  );
};

export const cityTemplate = (data: patientDataModel) => {
  return (
    <div className="px-2">
      <p className="text-md text-center text-textColor">{data.city}</p>
    </div>
  );
};

export const lastAppointmentTemplate = (data: patientDataModel) => {
  return (
    <div className="px-2">
      <p className="text-md text-center text-textColor">
        {data.nextAppointment ? data.nextAppointment : "-"}
      </p>
    </div>
  );
};

export const nextAppointmentTemplate = (data: patientDataModel) => {
  return (
    <div className="px-2">
      <p className="text-md text-center text-textColor">
        {data.lastAppointment ? data.lastAppointment : "-"}
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
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
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
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
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
        className={options.className + " mx-2 font-bold text-textColor"}
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
          width: "120px",
          textAlign: "center",
        }}
        className="mx-6 text-textColor"
      >
        Showing {options.first} - {options.last} of {options.totalRecords}
      </span>
    );
  },
};
