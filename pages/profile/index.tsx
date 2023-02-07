import { getSession } from "next-auth/react";
import SignOutPage from "../auth/signout";

function ProfilePage() {
  return (
    <div>
      <h1>The Profile Page</h1>
      <SignOutPage />
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

export default ProfilePage;
