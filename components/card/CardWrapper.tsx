import { ReactNode } from "react";

function CardWrapper(props: { title: string; children: ReactNode }) {
  const { title, children } = props;

  return (
    <div className="flex h-60 w-full flex-grow flex-col justify-between rounded-md bg-primary p-5 md:w-1/3 xl:w-1/5">
      <h1 className="text-lg font-semibold text-textColor">{title}</h1>
      {children}
    </div>
  );
}

export default CardWrapper;
