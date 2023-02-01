import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function MessegesPage() {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  return (
    <div>
      <h1>Messeges</h1>
    </div>
  );
}

export default MessegesPage;
