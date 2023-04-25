import useSettingsQuery from "../../../hooks/queries/useSettingsQuery";
import FormWrapper from "./FormWrapper";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfilePicture from "./ProfilePicture";

function Profile() {
  const { data, isLoading } = useSettingsQuery();

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-start justify-start lg:flex-row lg:items-center">
        <ProfilePicture data={data} />

        <span className="ml-6 text-xl">
          This is the place to manage all things personal and website related{" "}
        </span>
      </div>

      <div className="flex w-full flex-col lg:flex-row">
        <div className="my-4 mr-0 w-full lg:mr-4">
          <div className="w-full rounded-lg bg-primary p-5 text-lg font-medium text-textColor">
            <div className="flex flex-row items-start">
              <div className="flex flex-col">
                <span className="mt-2 mb-4 text-2xl font-bold">
                  Personal Info
                </span>

                <span className="text-md mb-6">
                  This section contails all your personal info
                </span>

                <PersonalInfoForm data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
