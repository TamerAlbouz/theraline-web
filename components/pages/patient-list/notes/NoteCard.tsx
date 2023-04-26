import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { NoteInfo } from "./NoteInfo";
import { useNotesStore } from "../../../../hooks/stores/useNotesStore";
import { PatientNote } from "../../../../hooks/queries/patient-list/useNotesQuery";

export function NoteCard(props: {
  data: PatientNote;
  opensModal: boolean;
  isFirstInList: boolean;
}) {
  const { data, opensModal, isFirstInList } = props;
  const { title } = data;

  const [isOpen, setIsOpen] = useState(false);

  const { selectedNote, setSelectedNote } = useNotesStore();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const selectNote = () => {
    setSelectedNote(data);

    if (opensModal) {
      openModal();
    }
  };

  const isSelected = selectedNote === data;

  return (
    <>
      <button
        type="button"
        className={`cursor-pointer border-b border-white px-2 py-4 text-black hover:bg-primary ${
          isSelected
            ? "border-b border-green-500 bg-primary"
            : "bg-primary-dark"
        } ${isFirstInList ? "rounded-t-lg" : ""}`}
        onClick={selectNote}>
        <div className="text-lg font-bold text-textColor">{title}</div>
      </button>

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
                    className="text-lg font-bold leading-6 text-black">
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
}
