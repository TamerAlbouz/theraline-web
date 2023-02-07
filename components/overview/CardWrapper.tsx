import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowCircleRight } from "react-icons/hi";

function CardWrapper(props: any) {
  const { title, children, link } = props;
  const router = useRouter();

  const navigateToLink = () => {
    router.push(link);
  };

  return (
    <div className="flex h-80 w-full flex-grow flex-col justify-between rounded-sm bg-primary p-5 md:w-1/3 xl:w-1/5">
      <h1 className="mb-3 text-lg font-semibold text-white">{title}</h1>
      {children}
      <div className="group mt-3 flex w-36 cursor-pointer flex-row items-center justify-between rounded-full border-2 border-white bg-secondary pl-5 text-white">
        <p className="text-center">More</p>
        <HiArrowCircleRight
          onClick={navigateToLink}
          className="text-4xl text-white group-hover:text-gray-300"
        />
      </div>
    </div>
  );
}

export default CardWrapper;
