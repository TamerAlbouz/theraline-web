import SignoutButton from "../../components/pages/settings/SignoutButton";
import Profile from "../../components/pages/settings/Profile";

function SettingsPage() {
  return (
    <div className="flex flex-col justify-start w-full">
      <Profile />
      <SignoutButton />
    </div>
  );
}

export default SettingsPage;
