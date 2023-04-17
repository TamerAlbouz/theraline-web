import { HiTrash } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";

function ExistingEventModalContent(props: any) {
  const { deleteEventCallback, data } = props;
  const { selectedEvent } = useCalendarStore();
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setList(data);
    }

    console.log(list);
  }, [props, data, list]);

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
        onClick={() => deleteEventCallback()}
        className="h-7 w-7 cursor-pointer text-red-500"
      />
    </div>
  );
}

export default ExistingEventModalContent;
