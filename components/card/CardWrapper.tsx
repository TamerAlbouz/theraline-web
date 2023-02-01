import { HiArrowCircleRight } from "react-icons/hi";

function CardWrapper(props: any) {
  return (
    <div className="flex w-80 flex-col gap-5 rounded-md bg-primary p-5">
      {props.children}
      <div className="flex w-36 flex-row items-center justify-between rounded-full border-2 border-white bg-secondary pl-5 text-white">
        <p className="text-center">More</p>
        <button>
          <HiArrowCircleRight className="text-4xl text-white" />
        </button>
      </div>
    </div>
  );
}

export default CardWrapper;
