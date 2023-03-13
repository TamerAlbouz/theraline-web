import { getSession } from "next-auth/react";
import PrivacyPolicy from "../../components/help/PrivacyPolicy";

function HelpPage() {
  return (
    <>
      <PrivacyPolicy />
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

export default HelpPage;
