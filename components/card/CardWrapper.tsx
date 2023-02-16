import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowCircleRight } from "react-icons/hi";

function CardWrapper(props: {
  title: string;
  children: React.ReactNode;
  link: string;
}) {
  const { title, children, link } = props;
  const router = useRouter();

  const navigateToLink = () => {
    router.push(link);
  };

  return (
    <div
      className={`flex ${
        router.pathname === "/" ? "h-80" : "h-60"
      } w-full flex-grow flex-col justify-between rounded-sm bg-primary p-5 md:w-1/3 xl:w-1/5`}
    >
      <h1 className="mb-3 text-lg font-semibold text-textColor">{title}</h1>
      {children}
      <div className="group mt-3 flex w-36 cursor-pointer flex-row items-center justify-between rounded-full border-2 border-white bg-secondary pl-5 text-textColor">
        <p className="text-center">More</p>
        <HiArrowCircleRight
          onClick={navigateToLink}
          className="text-4xl text-textColor transition ease-in-out  group-hover:text-primary"
        />
      </div>
    </div>
  );
}

export default CardWrapper;
