// import { ChangeEvent, useRef, useState } from "react";
import { SettingDetails } from "../../../hooks/queries/useSettingsQuery";

function ProfilePicture({ data }: { data: SettingDetails }) {
  // const fileRef = useRef<HTMLInputElement | null>(null);
  // const [fileName, setFileName] = useState("");

  // const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setFileName(event.target.files![0].name);

  //   console.log(`File Name: ${fileName}`);
  // };

  return (
    <div className="relative m-2">
      <img className="h-20 w-20 rounded-full " src={data.image} alt="" />

      {/* <div className="absolute -bottom-1 -right-1 cursor-pointer rounded-full bg-gray-100 p-2 hover:bg-gray-200">
        <input type="file" hidden ref={fileRef} onChange={handleUploadChange} />

        <HiPencil
          onClick={() => fileRef.current!.click()}
          className="h-4 w-4 text-primary"
        />
      </div> */}
    </div>
  );
}

export default ProfilePicture;
