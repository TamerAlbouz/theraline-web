import { getSession } from "next-auth/react";

const NotesPage = (props: any) => {
  return (
    <div>
      Notes
      {props.notes.map((e: { title: string; body: string }, index: number) => {
        return <div key={index}>{e.title + ", " + e.body}</div>;
      })}
    </div>
  );
};

export default NotesPage;

export async function getServerSideProps(context: any) {
  const { patientId } = context.params;
  console.log(patientId);

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
    props: {
      session,
      notes: [
        { title: "title1", body: "body1" },
        { title: "title2", body: "body2" },
      ],
    },
  };
}
