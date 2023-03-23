import LogoutButton from "../../components/pages/settings/LogoutButton";
import Profile from "../../components/pages/settings/Profile";

function SettingsPage() {
  return (
    <div className="flex flex-col justify-start">
      <Profile />
      <LogoutButton />
    </div>
  );
}

export default SettingsPage;
