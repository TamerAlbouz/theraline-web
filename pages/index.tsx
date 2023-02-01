import { getSession } from "next-auth/react";
import Meeting from "../components/overview/Meeting";

function OverviewPage() {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-5">
      <Meeting />
      <Meeting />
      <Meeting />
      <Meeting />
    </section>
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

export default OverviewPage;
