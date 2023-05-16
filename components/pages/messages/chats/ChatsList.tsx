import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ChatCard from "./ChatCard";
import useChatsQuery, {
  Chat,
} from "../../../../hooks/queries/chats/useChatsQuery";
import Loader from "../../../misc/Loader";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
import useChatUsersQuery, {
  ChatUser,
} from "../../../../hooks/queries/chats/useChatUsers";

function ChatsList() {
  const { selectedChat } = useMessageStore();
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, isError } = useChatsQuery();
  const { data: users } = useChatUsersQuery(
    // eslint-disable-next-line no-underscore-dangle
    selectedChat?._id,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>An error has ocurred</div>;
  }

  const filterChats = (chats: Chat[]) => {
    if (searchValue === "") {
      return chats;
    }

    return chats.filter((chat) => {
      return chat.name.toLowerCase().includes(searchValue.toLowerCase().trim());
    });
  };

  return (
    <>
      <div className="flex h-full flex-col rounded-l-lg bg-primary-dark">
        <div className="m-2 flex flex-row">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
            className=" mb-4 w-full rounded-lg border-gray-100 bg-white p-4 text-black shadow-2xl shadow-primary"
          />

          {selectedChat && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
              className="mx-2 h-14 rounded-lg bg-white px-4 py-2 text-primary-dark hover:bg-gray-100">
              Users
            </button>
          )}
        </div>

        <div className="overflow-y-scroll scroll-smooth scrollbar-hide">
          {filterChats(data!).map((chat, index) => {
            return (
              <ChatCard
                chat={chat}
                isLast={index === data!.length - 1}
                // eslint-disable-next-line no-underscore-dangle
                key={chat._id}
              />
            );
          })}
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
                <Dialog.Panel className="h-[30em] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-black">
                    Users
                  </Dialog.Title>

                  {users && (
                    <div className="mt-4 ">
                      {users.map((element: ChatUser, index: any) => (
                        <div className="fle flex-col" key={index}>
                          <div className="mt-2 flex flex-row justify-between">
                            <span className="text-lg">
                              {element &&
                                `${element.firstName} ${element.lastName}`}
                            </span>

                            {element.role === "DOCTOR" && (
                              <span className="text-lg text-gray-400">
                                Admin
                              </span>
                            )}
                          </div>

                          <hr className="mt-2" />
                        </div>
                      ))}
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ChatsList;
