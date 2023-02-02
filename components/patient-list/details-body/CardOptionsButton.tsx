import {
  HiEllipsisHorizontal,
  HiClipboard,
  HiTrash,
  HiPencilSquare,
} from "react-icons/hi2";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IconType } from "react-icons";

const menuOptions: Array<{
  label: string;
  icon: IconType;
  handleClick: () => void;
}> = [
  {
    label: "Edit Patient",
    icon: HiPencilSquare,
    handleClick: () => {
      console.log("Edit Patient");
    },
  },
  {
    label: "Duplicate",
    icon: HiClipboard,
    handleClick: () => {
      console.log("Duplicate");
    },
  },
  {
    label: "Delete Patient",
    icon: HiTrash,
    handleClick: () => {
      console.log("Delete Patient");
    },
  },
];

const CardOptionsButton = () => {
  return (
    <div className="flex justify-end">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <HiEllipsisHorizontal
            className="ml-2 -mr-1 h-7 w-7 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {menuOptions.map((e) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-secondary text-white" : "text-gray-900"
                      } group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-sm`}
                      onClick={e.handleClick}
                    >
                      <>
                        {<e.icon className="mr-2 h-5 w-5" />}
                        {e.label}
                      </>
                    </div>
                  )}
                </Menu.Item>
              );
            })}
            {/* <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item> */}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CardOptionsButton;
