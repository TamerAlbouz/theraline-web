import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNotesStore } from "../../../hooks/stores/useNotesStore";
import { noteModel } from "../../../types/note";
import { NoteInfo } from "./NoteInfo";

export const NoteCard = (props: { data: noteModel; opensModal: boolean }) => {
  let [isOpen, setIsOpen] = useState(false);

  const { selectedNote, setSelectedNote } = useNotesStore();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const selectNote = () => {
    setSelectedNote(props.data);

    if (props.opensModal) {
      openModal();
    }
  };

  const isSelected = selectedNote === props.data;

  return (
    <>
      <div
        className={`cursor-pointer border-b border-white p-2 text-black hover:bg-primary ${
          isSelected
            ? "border-b border-green-500 bg-primary"
            : "bg-primary-dark"
        }`}
        onClick={selectNote}
      >
        <div className="text-white">{props.data.title}</div>
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
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-black"
                  >
                    {selectedNote && selectedNote?.title}
                  </Dialog.Title>

                  <NoteInfo showTitle={false} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
