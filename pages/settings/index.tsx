import { getSession } from "next-auth/react";
import FormWrapper from "../../components/settings/FormWrapper";
import { HiUser, HiNewspaper } from "react-icons/hi2";
import PersonalInfoForm from "../../components/settings/PersonalInfoForm";
import ProfilePicture from "../../components/settings/ProfilePicture";
import NewsletterForm from "../../components/settings/NewsletterForm";
import Profile from "../../components/settings/Profile";

function SettingsPage() {
  return (
    <>
      <Profile />
    </>
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
