import { useEffect, useState } from "react";
import { useNotesStore } from "../../../../hooks/stores/useNotesStore";

export const NoteInfo = (props: { showTitle: boolean }) => {
  const { selectedNote } = useNotesStore();

  const [body, setBody] = useState("");

  if (selectedNote) {
    useEffect(() => {
      setBody(selectedNote.body);
    }, [selectedNote.body]);
  }

  if (selectedNote == undefined) {
    return (
      <div className="flex items-center justify-center p-16 text-black">
        <p>Choose a note to proceed</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-lg border-b border-white bg-white p-4 text-black">
      {props.showTitle && (
        <p className="mb-2 px-3 text-center text-2xl font-bold">
          {selectedNote.title}
        </p>
      )}

      <textarea
        className="min-h-32 resize-y p-3 text-lg"
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
        }}
      />

      {body != selectedNote.body && (
        <input
          type="submit"
          value="Save"
          onClick={(e) => {
            console.log(body);
          }}
          className="mt-2 w-16 cursor-pointer rounded-md bg-primary-dark px-4 py-2 font-bold text-textColor hover:bg-primary"
        />
      )}
    </div>
  );
};
