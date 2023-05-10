import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
// eslint-disable-next-line prettier/prettier
import useAvailableUsersQuery, {
  AvailableUser,
} from "../../../../hooks/queries/chats/useAvailableUsersQuery";
import { useCreateConvoMutation } from "../../../../hooks/mutations/chats/useCreateConvoMutation";

function NewConvoModalContent(props: { closeModal: Function }) {
  const { data } = useAvailableUsersQuery();
  const [users, setUsers] = useState<AvailableUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<AvailableUser[]>([]);
  const [query, setQuery] = useState("");
  const { mutate: createConvo } = useCreateConvoMutation();
  const { closeModal } = props;

  useEffect(() => {
    if (data) {
      console.log(data);
      setUsers(data);
    }
  }, [data]);

  async function submitNewConvoInfo() {
    createConvo({
      // eslint-disable-next-line no-underscore-dangle
      users_id: selectedUsers.map((user) => user._id),
    });

    closeModal();
  }

  const filteredUsers =
    query === ""
      ? users
      : users.filter((user) =>
          `${user.firstName} ${user.lastName}`
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <form className="mt-4 flex flex-col">
      <span>User</span>
      <Combobox
        value={selectedUsers}
        onChange={(result: any) => {
          setSelectedUsers([...result]);
        }}
        multiple>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(patients: AvailableUser[]) =>
                patients.map((user) => user.firstName).join(", ")
              }
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}>
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredUsers.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredUsers.map((user) => (
                  <Combobox.Option
                    // eslint-disable-next-line no-underscore-dangle
                    key={user._id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-secondary text-white" : "text-primary"
                      }`
                    }
                    value={user}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}>
                          {`${user.firstName} ${user.lastName}`}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-secondary"
                            }`}>
                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

      <button
        type="submit"
        value="Create"
        onClick={submitNewConvoInfo}
        className="focus:shadow-outline mt-4 w-full cursor-pointer rounded-lg bg-primary py-3 px-4 font-bold text-textColor transition duration-300 ease-in-out hover:bg-primary-dark focus:outline-none disabled:cursor-default disabled:bg-gray-400 disabled:text-gray-600">
        Create
      </button>
    </form>
  );
}

export default NewConvoModalContent;
