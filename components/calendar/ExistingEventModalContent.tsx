import { HiTrash } from "react-icons/hi2";
import { calendarEvent } from "../../types/calendarEvent";

function ExistingEventModalContent(props: {
  data: calendarEvent;
  deleteEventCallback: () => void;
}) {
  return (
    <div className="mt-4">
      <div className="flex flex-row">
        <span className="mr-8">Start:</span>

        {props.data.start.toString()}
      </div>

      <div className="mt-4 flex flex-row">
        <span className="mr-8">End:</span>

        {props.data.end.toString()}
      </div>

      <HiTrash
        onClick={() => props.deleteEventCallback()}
        className="h-7 w-7 cursor-pointer text-red-500"
      />
    </div>
  );
}

export default ExistingEventModalContent;
