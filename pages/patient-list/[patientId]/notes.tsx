import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { NoteCard } from "../../../components/patient-list/notes/NoteCard";
import { NoteInfo } from "../../../components/patient-list/notes/NoteInfo";

const dummyData: Array<{ id: string; title: string; body: string }> = [
  { id: "1", title: "title 1", body: "lorem ipsum 1" },
  { id: "2", title: "title 2", body: "lorem ipsum 2" },
  { id: "3", title: "title 3", body: "lorem ipsum 3" },
];

const NotesPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);

    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  const breakpoint = 650;

  return (
    <>
      {width > breakpoint && (
        <div className="flex w-full flex-row">
          <div className="flex w-2/5 flex-col">
            {dummyData.map((element, index) => {
              return <NoteCard data={element} opensModal={false} key={index} />;
            })}
          </div>

          <div className="mr-2 w-3/5">
            <NoteInfo showTitle={true} />
          </div>
        </div>
      )}

      {width < breakpoint && (
        <div className="flex w-full flex-col">
          {dummyData.map((element, index) => {
            return <NoteCard data={element} opensModal={true} key={index} />;
          })}
        </div>
      )}
    </>
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
