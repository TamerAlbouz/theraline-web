import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const settingsSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  displayName: z.string(),
  fullName: z.string(),
  description: z.string(),
  phoneNumber: z.string(),
});

type settingsValues = z.infer<typeof settingsSchema>;

const defaultValues = {
  email: "tim.cook@gmail.com",
  displayName: "Tim",
  fullName: "Tim Cook",
  description: "Licensed therapist operating in the DC area",
  phoneNumber: "78655417",
};

function PersonalInfoForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm<settingsValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues,
  });

  const [isEditing, setIsEditing] = useState(false);

  const submitUserInfo = async (data: any) => {
    console.log(data);

    setIsEditing(false);
  };

  const triggerEdit = (e: any) => {
    e.preventDefault();

    if (isEditing) {
      setValue("email", defaultValues.email, { shouldDirty: true });
      setValue("displayName", defaultValues.displayName, { shouldDirty: true });
      setValue("fullName", defaultValues.fullName, { shouldDirty: true });
      setValue("description", defaultValues.description, { shouldDirty: true });
      setValue("phoneNumber", defaultValues.phoneNumber, { shouldDirty: true });
    }

    setIsEditing((value) => !value);
  };

  return (
    <form onSubmit={handleSubmit(submitUserInfo)}>
      <div className="flex w-full flex-col lg:flex-row lg:justify-between">
        <div className="lg:mr-10">
          <div className="mb-4">
            <label
              htmlFor="settings-email"
              className="text-md mb-2 block font-bold">
              Email
            </label>
            <input
              {...register("email", {
                required: { value: true, message: "This field is required" },
              })}
              readOnly={!isEditing}
              id="settings-email"
              type="text"
              placeholder="Email"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.email?.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="settings-fullName"
              className="text-md mb-2 block font-bold">
              Full Name
            </label>
            <input
              {...register("fullName", {
                required: { value: true, message: "This field is required" },
              })}
              readOnly={!isEditing}
              id="settings-fullName"
              type="text"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.fullName?.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="settings-displayName"
              className="text-md mb-2 block font-bold">
              Display Name
            </label>
            <input
              {...register("displayName", {
                required: { value: true, message: "This field is required" },
              })}
              readOnly={!isEditing}
              id="settings-displayName"
              type="text"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.displayName?.message}
            </span>
          </div>
        </div>

        <div>
          <div className="mb-4 w-full">
            <label
              htmlFor="settings-phoneNumber"
              className="text-md mb-2 block font-bold">
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                required: { value: true, message: "This field is required" },
              })}
              readOnly={!isEditing}
              id="settings-phoneNumber"
              type="text"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.phoneNumber?.message}
            </span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="settings-description"
              className="text-md mb-2 block font-bold">
              Description / Bio
            </label>
            <textarea
              {...register("description", {
                required: { value: true, message: "This field is required" },
              })}
              readOnly={!isEditing}
              id="settings-description"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.description?.message}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={triggerEdit}
          className="focus:shadow-outline cursor-pointer rounded-lg bg-white py-2 px-4 font-bold text-primary hover:bg-gray-100 focus:outline-none">
          {isEditing ? "Cancel" : "Edit"}
        </button>

        {isDirty && (
          <input
            type="submit"
            value="Save"
            className="focus:shadow-outline cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-textColor hover:bg-primary-dark focus:outline-none"
          />
        )}
      </div>
    </form>
  );
}

export default PersonalInfoForm;
