import { useState } from "react";
import { useNotesStore } from "../../../hooks/useNotesStore";

export const NoteInfo = (props: { showTitle: boolean }) => {
  const { selectedNote } = useNotesStore();

  if (selectedNote == undefined) {
    return (
      <div className="flex items-center justify-center p-16 text-black">
        <p>Choose a note to proceed</p>
      </div>
    );
  }

  const [body, setBody] = useState(selectedNote.body);

  return (
    <div className="flex h-full flex-col border-b border-white bg-white p-4 text-black">
      {props.showTitle && (
        <p className="mb-2 px-3 text-2xl font-bold">{selectedNote.title}</p>
      )}

      {/* <p className="text-lg font-bold">{selectedNote.body}</p> */}

      <textarea
        className="min-h-32 resize-y p-3 text-lg"
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
        }}
      />
    </div>
  );
};
