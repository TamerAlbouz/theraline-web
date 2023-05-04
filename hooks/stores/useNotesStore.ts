import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { PatientNote } from "../queries/patient-list/useNotesQuery";

interface NotesState {
  selectedNote: PatientNote | undefined;
  setSelectedNote: (newNote: any) => void;
}

const useNotesStore = create<NotesState>()(
  devtools(
    (set) => ({
      selectedNote: undefined,
      setSelectedNote: (newNote: PatientNote) =>
        set((_: any) => ({ selectedNote: newNote })),
    }),
    {
      name: "notes-storage",
    },
  ),
);

export { useNotesStore };
