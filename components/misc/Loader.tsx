import { PulseLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex h-full items-center justify-center">
      {" "}
      <PulseLoader
        className="text-tertiary"
        color="#00D2F6"
        size={25}
        speedMultiplier={0.75}
      />
    </div>
  );
}

export default Loader;
