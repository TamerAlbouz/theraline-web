import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NoteCard } from "../../../components/pages/patient-list/notes/NoteCard";
import { NoteInfo } from "../../../components/pages/patient-list/notes/NoteInfo";
import { noteModel } from "../../../types/note";
import { useNotesStore } from "../../../hooks/stores/useNotesStore";
import AddButton from "../../../components/pages/patient-list/notes/AddButton";

const dummyData: Array<noteModel> = [
  { id: "1", title: "Title 1", body: "lorem ipsum 1" },
  { id: "2", title: "Title 2", body: "lorem ipsum 2" },
  { id: "3", title: "Title 3", body: "lorem ipsum 3" },
];

function NotesPage() {
  const [isOpen, setIsOpen] = useState(false);

  const { notes, setNotes, addNewNote, setSelectedNote } = useNotesStore();

  const newTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNotes(dummyData);
    setSelectedNote(notes.at(0));
  }, [notes, setNotes, setSelectedNote]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="hidden h-[40rem] w-full md:flex md:flex-row">
        <div className="relative mr-4 flex h-full w-2/5 flex-col overflow-y-scroll rounded-lg bg-primary-dark">
          {notes.map((element, index) => {
            return (
              <NoteCard
                data={element}
                opensModal={false}
                isFirstInList={index === 0}
                key={element.id}
              />
            );
          })}

          <div className="absolute right-3 bottom-3">
            <AddButton openModal={openModal} />
          </div>
        </div>

        <div className="mr-2 h-full w-3/5">
          <NoteInfo showTitle />
        </div>
      </div>

      <div className="relative flex h-[32rem] w-full flex-col rounded-lg bg-primary-dark md:hidden">
        {notes.map((element, index) => {
          return (
            <NoteCard
              data={element}
              opensModal
              isFirstInList={index === 0}
              key={element.id}
            />
          );
        })}

        <div className="absolute right-3 bottom-3">
          <AddButton openModal={openModal} />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="h-[20rem] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-black">
                    New note
                  </Dialog.Title>

                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Title"
                      ref={newTitleRef}
                      className="my-4 p-2 text-black"
                    />

                    <input
                      type="submit"
                      value="Save"
                      onClick={() => {
                        if (newTitleRef.current?.value.length === 0) {
                          return;
                        }

                        addNewNote({
                          id: "aspas",
                          title: newTitleRef.current!.value,
                          body: "",
                        });

                        closeModal();
                      }}
                      className="mt-2 w-16 cursor-pointer rounded-md bg-primary-dark px-4 py-2 font-bold text-textColor hover:bg-primary"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default NotesPage;
