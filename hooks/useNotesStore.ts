import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface NotesState {
  selectedNote: any;
  setSelectedNote: (newNote: any) => void;
}

const useNotesStore = create<NotesState>()(
  devtools(
    persist(
      (set) => ({
        selectedNote: undefined,
        setSelectedNote: (newNote) =>
          set((_: any) => ({ selectedNote: newNote })),
      }),
      {
        name: "notes-storage",
      }
    )
  )
);

export { useNotesStore };
