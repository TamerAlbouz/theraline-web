import { HiTrash } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";
import useAuthStore from "../../../hooks/stores/useAuthStore";

function ExistingEventModalContent(props: any) {
  const { selectedEvent } = useCalendarStore();
  const user = useAuthStore();
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    if (props.data) {
      setList(props.data);
    }

    // console.log(list);
  }, [list, user.accessToken, props]);

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
