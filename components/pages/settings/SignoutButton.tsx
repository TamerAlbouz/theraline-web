import { useAuth } from "../../../hooks/auth/useAuth";

function SignoutButton() {
  const { signout } = useAuth();

  const onLogout = () => {
    signout();
  };

  return (
    <button
      onClick={onLogout}
      className="focus:shadow-outline cursor-pointer rounded-lg bg-white py-2 px-4 font-bold text-primary hover:bg-gray-100 focus:outline-none w-28"
    >
      Sign Out
    </button>
  );
}

export default SignoutButton;
