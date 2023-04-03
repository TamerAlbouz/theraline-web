import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { noteModel } from "../../types/note";

interface NotesState {
  notes: Array<noteModel>;
  selectedNote: noteModel | undefined;
  setSelectedNote: (newNote: any) => void;
  setNotes: (newNotes: Array<noteModel>) => void;
  addNewNote: (newNote: noteModel) => void;
}

const useNotesStore = create<NotesState>()(
  devtools(
    persist(
      (set) => ({
        notes: [],
        selectedNote: undefined,
        setSelectedNote: (newNote: noteModel) =>
          set((_: any) => ({ selectedNote: newNote })),
        setNotes: (newNotes: Array<noteModel>) =>
          set((_: any) => ({ notes: newNotes })),
        addNewNote: (newNote: noteModel) =>
          set((state) => ({ notes: [...state.notes, newNote] })),
      }),
      {
        name: "notes-storage",
      },
    ),
  ),
);

export { useNotesStore };
