import { getSession, signOut } from "next-auth/react";

const SignOutPage = () => {
  const onSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <button className="text-3xl font-semibold text-white" onClick={onSignOut}>
      Sign out
    </button>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
}

export default SignOutPage;
