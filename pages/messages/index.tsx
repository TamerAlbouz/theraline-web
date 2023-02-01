import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function MessegesPage() {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  return (
    <div>
      <h1>Messeges</h1>
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

export default MessegesPage;
