import { noteModel } from "./../types/note.d";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface NotesState {
  selectedNote: noteModel | undefined;
  setSelectedNote: (newNote: any) => void;
}

const useNotesStore = create<NotesState>()(
  devtools(
    persist(
      (set) => ({
        selectedNote: undefined,
        setSelectedNote: (newNote: noteModel) =>
          set((_: any) => ({ selectedNote: newNote })),
      }),
      {
        name: "notes-storage",
      }
    )
  )
);

export { useNotesStore };
