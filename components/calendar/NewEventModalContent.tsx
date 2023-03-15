import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { callback } from "chart.js/dist/helpers/helpers.core";
import { calendarEvent } from "../../types/calendarEvent";

const newEventSchema = z.object({
  title: z.string(),
  startDate: z.string(),
  startTime: z.string(),
  endDate: z.string(),
  endTime: z.string(),
});

type settingsValues = z.infer<typeof newEventSchema>;

function NewEventModalContent(props: {
  addEventCallback: (data: calendarEvent) => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm<settingsValues>({
    resolver: zodResolver(newEventSchema),
  });

  const submitUserInfo = async (data: any) => {
    console.log(data);

    const start = new Date(`${data.startDate} ${data.startTime}`);
    const end = new Date(`${data.endDate} ${data.endTime}`);

    props.addEventCallback({ title: data.title, start, end });
  };

  return (
    <form onSubmit={handleSubmit(submitUserInfo)}>
      <div>
        <div className="my-4">
          <input
            {...register("title", {
              required: { value: true, message: "This field is required" },
            })}
            id="event-title"
            type="text"
            placeholder="Title"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />{" "}
          <span className="text-xs text-red-500">{errors.title?.message}</span>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="mr-4">
            <label
              htmlFor="event-startDate"
              className="text-md mb-2 block font-bold"
            >
              Start Date
            </label>
            <input
              {...register("startDate", {
                required: { value: true, message: "This field is required" },
              })}
              id="event-startDate"
              type="date"
              onChange={(e) => {
                setValue("endDate", e.currentTarget.value);
              }}
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.startDate?.message}
            </span>
          </div>

          <div>
            <label
              htmlFor="event-startTime"
              className="text-md mb-2 block font-bold"
            >
              Start Time
            </label>
            <input
              {...register("startTime", {
                required: { value: true, message: "This field is required" },
              })}
              id="event-startTime"
              type="time"
              min="00:00"
              max="23:59"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.startTime?.message}
            </span>
          </div>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="mb-4 mr-4">
            <label
              htmlFor="event-endDate"
              className="text-md mb-2 block font-bold"
            >
              End Date
            </label>
            <input
              {...register("endDate", {
                required: { value: true, message: "This field is required" },
              })}
              onChange={(e) => {
                setValue("startDate", e.currentTarget.value);
              }}
              id="event-endDate"
              type="date"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.endDate?.message}
            </span>
          </div>

          <div>
            <label
              htmlFor="event-endTime"
              className="text-md mb-2 block font-bold"
            >
              End Time
            </label>
            <input
              {...register("endTime", {
                required: { value: true, message: "This field is required" },
              })}
              id="event-endTime"
              type="time"
              onChange={(e) => console.log(e)}
              min="00:00"
              max="23:59"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.endTime?.message}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <input
          type="submit"
          value="Save"
          className="focus:shadow-outline cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-textColor hover:bg-primary-dark focus:outline-none"
        />
      </div>
    </form>
  );
}

export default NewEventModalContent;
