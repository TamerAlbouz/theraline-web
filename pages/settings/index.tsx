import { useSession } from "next-auth/react";
import Link from "next/link";

function SettingsPage() {
  const { data } = useSession();

  return (
    <div>
      <h1>Settings</h1>

      {data && (
        <Link href="/auth/signout">
          <a>Sign Out</a>
        </Link>
      )}
      {!data && (
        <Link href="/auth/signin">
          <a>Sign In</a>
        </Link>
      )}
    </div>
  );
}

export default SettingsPage;
