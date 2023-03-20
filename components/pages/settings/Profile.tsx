import { HiUser, HiNewspaper } from "react-icons/hi";
import FormWrapper from "./FormWrapper";
import NewsletterForm from "./NewsletterForm";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfilePicture from "./ProfilePicture";

function Profile() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-start justify-start lg:flex-row lg:items-center">
        <ProfilePicture />

        <span className="ml-6 text-xl">
          This is the place to manage all things personal and website related{" "}
        </span>
      </div>

      <div className="flex w-full flex-col lg:flex-row">
        <div className="my-4 mr-0 w-full lg:mr-4 lg:w-3/4">
          <FormWrapper
            title="Personal Info"
            description="This section contails all your personal info"
            icon={HiUser}
            child={PersonalInfoForm}
          />
        </div>

        <div className="my-4 ml-0 w-full lg:ml-4 lg:w-1/4">
          <FormWrapper
            title="Newsletter"
            description="Receive our newsletters!"
            icon={HiNewspaper}
            child={NewsletterForm}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
