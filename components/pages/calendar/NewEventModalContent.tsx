import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "../../../hooks/stores/useAuthStore";
import { useAppointmentsMutation } from "../../../hooks/mutations/useAppointmentMutation";
import { appointmentsDataModel } from "../../../types/appointmentsData";

const newEventSchema = z.object({
  title: z.string(),
  patient_id: z.string(),
  startDate: z.string(),
  startTime: z.string(),
  endDate: z.string(),
  endTime: z.string(),
});

type SettingsValues = z.infer<typeof newEventSchema>;

function NewEventModalContent(props: {
  addEventCallback: (data: appointmentsDataModel) => void;
}) {
  const { mutate: createAppointments } = useAppointmentsMutation();
  const { addEventCallback } = props;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SettingsValues>({
    resolver: zodResolver(newEventSchema),
  });
  const user = useAuthStore();

  const submitUserInfo = async (data: any) => {
    console.log(data);

    const start = data.startDate + "T" + data.startTime + ":00";
    console.log(start);

    const end = data.endDate + "T" + data.endTime + ":00";

    addEventCallback({
      title: data.title,
      patient_id: "6418b25a337d50ab61fe5915",
      start: start,
      end: end,
    });

    createAppointments({
      title: data.title,
      patient_id: "6418b25a337d50ab61fe5915",
      start: start,
      end: end,
    });
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
          />
          <span className="text-xs text-red-500">{errors.title?.message}</span>
        </div>
        <div className="my-4">
          <input
            {...register("patient_id", {
              required: { value: true, message: "This field is required" },
            })}
            id="event-title"
            type="email"
            placeholder="Title"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />
          <span className="text-xs text-red-500">{errors.title?.message}</span>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="mr-4">
            <label
              htmlFor="event-startDate"
              className="text-md mb-2 block font-bold">
              Start Date
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
              />
            </label>
            <span className="text-xs text-red-500">
              {errors.startDate?.message}
            </span>
          </div>

          <div>
            <label
              htmlFor="event-startTime"
              className="text-md mb-2 block font-bold">
              Start Time
              <input
                {...register("startTime", {
                  required: { value: true, message: "This field is required" },
                })}
                id="event-startTime"
                type="time"
                min="00:00"
                max="23:59"
                className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
              />
            </label>
            <span className="text-xs text-red-500">
              {errors.startTime?.message}
            </span>
          </div>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="mb-4 mr-4">
            <label
              htmlFor="event-endDate"
              className="text-md mb-2 block font-bold">
              End Date
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
            </label>
            <span className="text-xs text-red-500">
              {errors.endDate?.message}
            </span>
          </div>

          <div>
            <label
              htmlFor="event-endTime"
              className="text-md mb-2 block font-bold">
              End Time
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
              />
            </label>
            <span className="text-xs text-red-500">
              {errors.endTime?.message}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
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
