import { useRouter } from "next/router";
import { MdArrowBackIos } from "react-icons/md";
import PayoutTable from "../../../components/payment-info/tables/PayoutTable";

function Payout() {
  const router = useRouter();

  const navigateToLink = (link: any) => {
    router.push(link);
  };

  return (
    <div className="flex flex-col gap-5 px-24">
      <button
        className="flex w-fit items-center justify-center gap-3 rounded-md border-2 border-solid border-white bg-primary px-4 py-2"
        onClick={navigateToLink.bind(null, "/payment-info")}
      >
        <MdArrowBackIos />
        Go Back
      </button>

      <PayoutTable />
    </div>
  );
}

export default Payout;
