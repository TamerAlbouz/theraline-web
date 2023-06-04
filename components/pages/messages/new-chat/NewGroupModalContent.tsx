import { useForm } from "react-hook-form";
import { Fragment, useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Combobox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
import { useCreateGroupMutation } from "../../../../hooks/mutations/chats/useCreateGroupMutation";
import { CustomInput } from "../../../auth/CustomInput";
// eslint-disable-next-line prettier/prettier
import useGroupUsersQuery, {
  AvailableUser,
} from "../../../../hooks/queries/chats/useGroupUsersQuery";

const newGroupSchema = z.object({
  name: z.string(),
});

type NewGroupValues = z.infer<typeof newGroupSchema>;

function NewGroupModalContent(props: { closeModal: Function }) {
  const { data } = useGroupUsersQuery();
  const [users, setUsers] = useState<AvailableUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<AvailableUser[]>([]);
  const [query, setQuery] = useState("");
  const [base64, setBase64] = useState<string>("");
  const { mutate: createGroup } = useCreateGroupMutation();
  const { closeModal } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewGroupValues>({
    resolver: zodResolver(newGroupSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setUsers(data);
    }
  }, [data]);

  const getBase64 = (file: any) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const baseURL = reader.result;

        resolve(baseURL);
      };
    });
  };

  const handleFileRead = async (event: any) => {
    event.preventDefault();

    const file = event.target.files[0];

    getBase64(file).then((result: any) => {
      setBase64(result.toString());
    });
  };

  async function submitNewGroupInfo(result: NewGroupValues) {
    createGroup({
      name: result.name,
      image: base64,
      // eslint-disable-next-line no-underscore-dangle
      users_id: selectedUsers.map((user) => user._id),
    });

    closeModal();
  }

  const filteredUsers =
    query === ""
      ? users
      : users.filter((user) =>
          `${user.name} ${user.lastName}`
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <form
      className="mt-4 flex flex-col"
      onSubmit={handleSubmit(submitNewGroupInfo)}>
      <div className="mb-4">
        {" "}
        <CustomInput
          label="Name"
          type="text"
          placeholder="Enter Group Name"
          register={register("name", {
            required: { value: true, message: "This field is required" },
          })}
          error={errors.name?.message}
          htmlForValue="newgroup-name"
        />
      </div>

      <div className="mb-4">
        <span className="mb-2 block text-lg font-bold text-primary-dark">
          Image
        </span>
        <input
          type="file"
          name="avatar"
          id="file"
          accept=".jpef, .png, .jpg, .jpeg"
          onChange={handleFileRead}
        />
      </div>

      <span>Users</span>
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
        className="focus:shadow-outline mt-4 w-full cursor-pointer rounded-lg bg-primary py-3 px-4 font-bold text-textColor transition duration-300 ease-in-out hover:bg-primary-dark focus:outline-none disabled:cursor-default disabled:bg-gray-400 disabled:text-gray-600">
        Create
      </button>
    </form>
  );
}

export default NewGroupModalContent;
