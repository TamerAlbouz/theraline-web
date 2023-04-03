import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const settingsSchema = z.object({
  weekly: z.boolean(),
  monthly: z.boolean(),
});

type settingsValues = z.infer<typeof settingsSchema>;

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<settingsValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      weekly: false,
      monthly: true,
    },
  });

  const submitUserInfo = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitUserInfo)}>
      <div className="mb-4">
        <label
          htmlFor="settings-weekly"
          className="text-md mb-2 mr-2 font-bold">
          Weekly
        </label>
        <input
          {...register("weekly", {
            required: { value: true, message: "This field is required" },
          })}
          id="settings-weekly"
          type="checkbox"
        />{" "}
        <span className="text-xs text-red-500">{errors.weekly?.message}</span>
      </div>

      <div className="mb-4">
        <label
          htmlFor="settings-monthly"
          className="text-md mb-2 mr-2 font-bold">
          Monthly
        </label>
        <input
          {...register("monthly", {
            required: { value: true, message: "This field is required" },
          })}
          id="settings-monthly"
          type="checkbox"
        />{" "}
        <span className="text-xs text-red-500">{errors.monthly?.message}</span>
      </div>

      <div className="mt-8 flex justify-end">
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

export default NewsletterForm;
