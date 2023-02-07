import { getSession } from "next-auth/react";

function AppointmentDetail() {
  return (
    <div>
      <h1>Appointment Detail</h1>
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

export default AppointmentDetail;
