import { signOut } from "next-auth/react";

const SignOutPage = () => {
  const onSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div>
      <h3>Sign out page</h3>

      <button onClick={onSignOut}>Sign out</button>
    </div>
  );
};

export default SignOutPage;
