import { useAuth } from "../../../hooks/auth/useAuth";

function SignoutButton() {
  const { signout } = useAuth();

  const onLogout = () => {
    signout();
  };

  return (
    <button
      type="button"
      onClick={onLogout}
      className="focus:shadow-outline w-28 cursor-pointer rounded-lg bg-white py-2 px-4 font-bold text-primary hover:bg-gray-100 focus:outline-none">
      Sign Out
    </button>
  );
}

export default SignoutButton;
