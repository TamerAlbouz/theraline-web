import { getSession } from "next-auth/react";
import Profile from "../../components/pages/settings/Profile";

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
