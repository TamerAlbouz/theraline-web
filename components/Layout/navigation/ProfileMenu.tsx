import Image from "next/image";
import useSettingsQuery from "../../../hooks/queries/useSettingsQuery";
import Loader from "../../misc/Loader";

function ProfileMenu() {
  const { data, isLoading } = useSettingsQuery();

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <div className="ml-2 flex w-full flex-row items-center gap-3 md:ml-0 md:px-5">
      <Image
        width={50}
        height={50}
        className="h-8 w-8 rounded-full md:h-12 md:w-12"
        src={data.image}
        alt=""
      />

      <div className="hidden md:block">
        <h2 className="text-xl font-semibold text-textColor">
          {`${data.firstName} ${data.lastName}`}
        </h2>
        <p className="text-secondary">Therapist</p>
      </div>
    </div>
  );
}

export default ProfileMenu;
