import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useNotesStore } from "../../../../hooks/stores/useNotesStore";
import { useUpdateNoteMutation } from "../../../../hooks/mutations/patient-details/useUpdateNoteMutation";

export function NoteInfo(props: { showTitle: boolean }) {
  const { showTitle } = props;
  const { selectedNote } = useNotesStore();
  const router = useRouter();
  const { mutate: updateNote, } = useUpdateNoteMutation(
    router.query.patientId!.toString(),
  );

  const [body, setBody] = useState<string | undefined>("");

  useEffect(() => {
    setBody(selectedNote?.body);
  }, [selectedNote?.body]);

  if (selectedNote === undefined) {
    return (
      <div className="flex items-center justify-center p-16 text-black">
        <p>Choose a note to proceed</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-lg border-b border-white bg-white p-4 text-black">
      {showTitle && (
        <p className="mb-2 px-3 text-center text-2xl font-bold">
          {selectedNote.title}
        </p>
      )}

      <textarea
        className="min-h-32 resize-y p-3 text-lg"
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
          console.log(body);
        }}
      />

      {/* {body !== selectedNote.body && ( */}
        <input
          type="submit"
          value="Save"
          onClick={() => {
            console.log(body);
            if (body) {
              updateNote({
                title: selectedNote.title,
                body: body!,
                user_id: router.query.patientId!.toString(),
                // eslint-disable-next-line no-underscore-dangle
                noteId: selectedNote._id,
              });
            }
          }}
          className="mt-2 w-16 cursor-pointer rounded-md bg-primary-dark px-4 py-2 font-bold text-textColor hover:bg-primary"
        />
      {/* )} */}
    </div>
  );
}
