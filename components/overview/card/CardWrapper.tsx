import { HiArrowCircleRight } from "react-icons/hi";

function CardWrapper(props: any) {
  return (
    <div className="flex w-96 flex-col gap-5 rounded-sm bg-primary p-5 md:w-80">
      <h1 className="text-lg font-semibold text-white">{props.title}</h1>
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
