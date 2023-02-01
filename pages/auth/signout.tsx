import { signOut } from "next-auth/react";

const SignOutPage = () => {
  const onSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-white">Sign out page</h3>

      <button className="text-xl font-medium text-white" onClick={onSignOut}>
        Sign out
      </button>
    </div>
  );
};

export default SignOutPage;
