import { getSession } from "next-auth/react";

function ClinicPage() {
  return (
    <div>
      <h1>Clinic Page</h1>
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

export default ClinicPage;
