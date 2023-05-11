import useSettingsQuery from "../../../hooks/queries/useSettingsQuery";
import Loader from "../../misc/Loader";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfilePicture from "./ProfilePicture";

function Profile() {
  const { data, isLoading } = useSettingsQuery();

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="my-4 mr-0 w-full lg:mr-4">
          <div className="w-full rounded-lg bg-primary p-5 text-lg font-medium text-textColor">
            <div className="flex w-full flex-row items-center justify-between">
              <div className="flex w-full flex-col">
                <span className="mt-2 mb-4 text-2xl font-bold">
                  Personal Info
                </span>

                <span className="text-md mb-6">
                  This section contails all your personal info
                </span>
                <div className="flex flex-row items-center justify-between pr-40">
                  <PersonalInfoForm data={data} />
                  <ProfilePicture data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
