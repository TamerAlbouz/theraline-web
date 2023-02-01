import { getSession, useSession } from "next-auth/react";
import Link from "next/link";

function SettingsPage() {
  const { data } = useSession();

  return (
    <div>
      <h1>Settings</h1>

      {data && (
        <Link href="/auth/signout">
          <a className="text-3xl font-bold text-white">Sign Out</a>
        </Link>
      )}
      {!data && (
        <Link href="/auth/signin">
          <a className="text-xl text-white">Sign In</a>
        </Link>
      )}
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

export default SettingsPage;
