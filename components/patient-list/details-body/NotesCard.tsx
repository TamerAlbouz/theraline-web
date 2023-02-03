import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineUser } from "react-icons/hi2";

const NotesCard = () => {
  const router = useRouter();

  const patientId = router.query.patientId;

  return (
    <div className="flex flex-col rounded-lg bg-primary-dark px-6 py-10">
      <div className="flex flex-row justify-between">
        <p className="text-lg font-bold text-white">Notes</p>

        <div className="text-lg font-bold text-tertiary">
          <Link href={`${patientId}/notes`}>See all</Link>
        </div>
      </div>

      <div className="my-4 flex flex-col rounded-md bg-primary p-4">
        <p className="text-white">
          This patient is bla and bla, but also very blabla. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Eos enim autem iusto,
          perferendis iste sapiente tempora voluptatibus expedita neque vero.
        </p>

        <div className="mt-4 flex flex-row justify-end">
          <div className="text-md bottom-3 right-3 rounded-md bg-white px-4 py-2 text-primary">
            <Link href={`${patientId}/notes`}>See more</Link>
          </div>
        </div>
      </div>

      <p className="text-md my-2 text-white">Lorem ipsum dolor sit amet.</p>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <HiOutlineUser className="mr-2 h-4 w-4 text-tertiary" />

          <p className="text-sm text-white">Drg. Mega Noodle</p>
        </div>

        <p className="text-white">31 Jan '23</p>
      </div>
    </div>
  );
};

export default NotesCard;
