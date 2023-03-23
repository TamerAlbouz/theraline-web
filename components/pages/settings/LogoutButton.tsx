import { useAuth } from "../../../hooks/auth/useAuth";

function LogoutButton() {
  const { logout } = useAuth();

  const onLogout = () => {
    logout();
  };

  return (
    <button
      onClick={onLogout}
      className="focus:shadow-outline cursor-pointer rounded-lg bg-white py-2 px-4 font-bold text-primary hover:bg-gray-100 focus:outline-none w-28"
    >
      Log Out
    </button>
  );
}

export default LogoutButton;
