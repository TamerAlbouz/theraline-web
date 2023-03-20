import { HiTrash } from "react-icons/hi2";
import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";

function ExistingEventModalContent(props: { deleteEventCallback: () => void }) {
  const { selectedEvent } = useCalendarStore();

  return (
    <div className="mt-4">
      <div className="flex flex-row">
        <span className="mr-8">Start:</span>

        {selectedEvent!.start.toString()}
      </div>

      <div className="mt-4 flex flex-row">
        <span className="mr-8">End:</span>

        {selectedEvent!.end.toString()}
      </div>

      <HiTrash
        onClick={() => props.deleteEventCallback()}
        className="h-7 w-7 cursor-pointer text-red-500"
      />
    </div>
  );
}

export default ExistingEventModalContent;
