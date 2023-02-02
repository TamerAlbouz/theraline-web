import { signOut } from "next-auth/react";

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

export default SignOutPage;
