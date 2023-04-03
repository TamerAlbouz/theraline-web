import SignoutButton from "../../components/pages/settings/SignoutButton";
import Profile from "../../components/pages/settings/Profile";

function SettingsPage() {
  return (
    <div className="flex w-full flex-col justify-start">
      <Profile />
      <SignoutButton />
    </div>
  );
}

export default SettingsPage;
