import {
  HiDocumentArrowUp,
  HiTrash,
  HiOutlineArrowDownTray,
} from "react-icons/hi2";

function FilesCard() {
  const dummyData: Array<{ name: string; size: string }> = [
    { name: "Check-up result", size: "240KB" },
    { name: "Report", size: "194KB" },
  ];

  return (
    <div className="flex flex-col rounded-lg bg-primary-dark px-6 py-10">
      <div className="flex flex-row justify-between">
        <p className="text-lg font-bold text-textColor">Files / Documents</p>

        <div className="cursor-pointer text-lg font-bold text-tertiary">
          Add Files
          {/* <input type="file" onChange={() => {}} value="Add Files" /> */}
        </div>
      </div>

      {dummyData.map((element, index) => {
        return (
          <div
            key={index}
            className="group my-3 flex flex-row items-center justify-between rounded-md bg-white px-6 py-3 shadow-md drop-shadow-md"
          >
            <div className="flex flex-row items-center">
              <HiDocumentArrowUp className="mr-4 h-10 w-10 text-primary" />

              <p className="text-md text-primary-dark">{element.name}</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="text-md block text-gray-500 group-hover:hidden">
                {element.size}
              </p>

              <HiTrash className="hidden h-6 w-6 cursor-pointer text-red-500 group-hover:block" />

              <HiOutlineArrowDownTray className="ml-4 hidden h-6 w-6 cursor-pointer text-blue-500 group-hover:block" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FilesCard;
