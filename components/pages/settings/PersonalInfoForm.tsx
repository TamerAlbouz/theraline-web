import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SettingDetails } from "../../../hooks/queries/useSettingsQuery";
import { useUpdateSettingsMutation } from "../../../hooks/mutations/useUpdateSettingsInfo";

const settingsSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
});

type SettingsValues = z.infer<typeof settingsSchema>;

let defaultValues: SettingDetails = {
  email: "-",
  firstName: "-",
  lastName: "-",
  phone: "-",
  image: "",
};

function PersonalInfoForm({ data }: { data: SettingDetails }) {
  const { mutate: updateSettings } = useUpdateSettingsMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm<SettingsValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues,
  });

  useEffect(() => {
    if (data) {
      defaultValues = data;
      setValue("email", data.email, { shouldDirty: false });
      setValue("firstName", data.firstName, { shouldDirty: false });
      setValue("lastName", data.lastName, { shouldDirty: false });
      setValue("phone", data.phone, { shouldDirty: false });
    }
  }, [data, setValue]);

  const [isEditing, setIsEditing] = useState(false);

  const submitUserInfo = async (result: SettingsValues) => {
    console.log(result);

    updateSettings({ ...result, image: data.image });

    setIsEditing(false);
  };

  const triggerEdit = (e: any) => {
    e.preventDefault();

    if (isEditing) {
      setValue("email", defaultValues.email, { shouldDirty: true });
      setValue("firstName", defaultValues.firstName, { shouldDirty: true });
      setValue("lastName", defaultValues.lastName, { shouldDirty: true });
      setValue("phone", defaultValues.phone, { shouldDirty: true });
    }

    setIsEditing((value) => !value);
  };

  return (
    <form onSubmit={handleSubmit(submitUserInfo)}>
      <div className="flex w-full flex-col lg:flex-row lg:justify-between">
        <div className="lg:mr-10">
          <div className="mb-4 flex w-full flex-row">
            <div className="mr-4">
              <label
                htmlFor="settings-firstName"
                className="text-md mb-2 block font-bold">
                First Name
                <input
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  readOnly={!isEditing}
                  id="settings-firstName"
                  type="text"
                  className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
                />
              </label>
              <span className="text-xs text-red-500">
                {errors.firstName?.message}
              </span>
            </div>

            <div>
              <label
                htmlFor="settings-lastName"
                className="text-md mb-2 block font-bold">
                Last Name
                <input
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  readOnly={!isEditing}
                  id="settings-lastName"
                  type="text"
                  className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
                />
              </label>
              <span className="text-xs text-red-500">
                {errors.lastName?.message}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="settings-email"
              className="text-md mb-2 block font-bold">
              Email
              <input
                {...register("email", {
                  required: { value: true, message: "This field is required" },
                })}
                readOnly
                id="settings-email"
                type="text"
                placeholder="Email"
                className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
              />
            </label>
            <span className="text-xs text-red-500">
              {errors.email?.message}
            </span>
          </div>

          <div>
            <div className="mb-4 w-full">
              <label
                htmlFor="settings-phone"
                className="text-md mb-2 block font-bold">
                Phone Number
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  readOnly={!isEditing}
                  id="settings-phone"
                  type="text"
                  className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
                />
              </label>
              <span className="text-xs text-red-500">
                {errors.phone?.message}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={triggerEdit}
          className="focus:shadow-outline mr-8 cursor-pointer rounded-lg bg-white py-2 px-4 font-bold text-primary hover:bg-gray-100 focus:outline-none">
          {isEditing ? "Cancel" : "Edit"}
        </button>

        {isDirty && (
          <input
            type="submit"
            value="Save"
            className="focus:shadow-outline cursor-pointer rounded-lg bg-tertiary py-2 px-4 font-bold text-primary hover:text-primary-dark focus:outline-none"
          />
        )}
      </div>
    </form>
  );
}

export default PersonalInfoForm;
