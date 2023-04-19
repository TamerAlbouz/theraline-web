import { Fragment, useState } from "react";
import ChatsList from "../../components/pages/messages/chats/ChatsList";
import AppMessageList from "../../components/pages/messages/messages/MessageList";
import { Dialog, Transition } from "@headlessui/react";
import NewChatModalContent from "../../components/pages/messages/new-chat/NewChatModalContent";

function MessagesPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex w-full flex-col">
        <button
          type="button"
          className="mb-2 w-40 cursor-pointer rounded-md bg-primary px-4 py-2 font-semibold text-white  transition ease-in-out hover:bg-primary-dark"
          onClick={openModal}>
          New Chat
        </button>

        <div className="flex h-[50rem] w-full flex-row">
          <div className="w-2/5">
            <ChatsList />
          </div>

          <div className="w-3/5">
            <AppMessageList />
          </div>
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
                <Dialog.Panel className="h-[26rem] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-black">
                    New Chat
                  </Dialog.Title>

                  <NewChatModalContent closeModal={closeModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MessagesPage;
