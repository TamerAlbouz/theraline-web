import Link from "next/link";
import { useRouter } from "next/router";
import { PatientNote } from "../../../../hooks/queries/patient-list/useNotesQuery";

function NotesCard({ note }: { note: PatientNote | undefined }) {
  const router = useRouter();

  const { patientId } = router.query;

  return (
    <div className="flex flex-col rounded-lg bg-primary-dark px-6 py-10">
      <div className="flex flex-row justify-between">
        <p className="text-lg font-bold text-textColor">Notes</p>

        <div className="text-lg font-bold text-tertiary">
          <Link href={`${patientId}/notes`}>See all</Link>
        </div>
      </div>

      {!note && (
        <div>
          There are no notes yet. Click{" "}
          <span className="italic text-tertiary">See All</span> and add a new
          one
        </div>
      )}

      {note && (
        <>
          <p className="my-2 text-lg text-textColor">Title: {note.title}</p>

          <div className="my-4 flex flex-col rounded-md bg-primary p-4">
            <p className="text-textColor">{note.body}</p>

            <div className="mt-4 flex flex-row justify-end">
              <div className="text-md bottom-3 right-3 rounded-md bg-white px-4 py-2 text-primary">
                <Link href={`${patientId}/notes`}>See more</Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <HiOutlineUser className="mr-2 h-4 w-4 text-tertiary" />

          <p className="text-sm text-textColor">Drg. Mega Noodle</p>
        </div>

        <p className="text-textColor">31 Jan 2023</p>
      </div> */}
    </div>
  );
}

export default NotesCard;
