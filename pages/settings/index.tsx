import { getSession } from "next-auth/react";
import FormWrapper from "../../components/settings/FormWrapper";
import { HiUser, HiNewspaper } from "react-icons/hi2";
import PersonalInfoForm from "../../components/settings/PersonalInfoForm";
import ProfilePicture from "../../components/settings/ProfilePicture";
import NewsletterForm from "../../components/settings/NewsletterForm";

function SettingsPage() {
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

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permenant: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default SettingsPage;
