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

  return (
    <div className="flex flex-col border-b border-white bg-white pt-2 text-black">
      {props.showTitle && (
        <p className="text-xl font-bold">{selectedNote.title}</p>
      )}

      <p className="text-lg font-bold">{selectedNote.body}</p>
    </div>
  );
};
