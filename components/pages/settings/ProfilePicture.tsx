import { ChangeEvent, useRef, useState } from "react";
import { HiPencil } from "react-icons/hi2";

function ProfilePicture() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");

  const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.files![0].name);
    console.log(`File Name: ${event.target.files![0].name}`);
  };

  return (
    <div className="relative m-2">
      <img
        className="h-20 w-20 rounded-full "
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />

      <div className="absolute -bottom-1 -right-1 cursor-pointer rounded-full bg-gray-100 p-2 hover:bg-gray-200">
        <input type="file" hidden ref={fileRef} onChange={handleUploadChange} />

        <HiPencil
          onClick={() => fileRef.current!.click()}
          className="h-4 w-4 text-primary"
        />
      </div>
    </div>
  );
}

export default ProfilePicture;
