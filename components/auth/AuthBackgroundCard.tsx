import { ReactNode } from "react";

function AuthBackgroundCard(props: { children: ReactNode }) {
  const { children } = props;
  return (
    <div className="flex h-full w-96 items-center justify-center">
      <div className="my-4 flex w-full items-center justify-center rounded-lg bg-white bg-opacity-70 py-7 px-6 shadow-sm shadow-primary drop-shadow-sm backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

export default AuthBackgroundCard;
