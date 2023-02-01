import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function PatientListPage() {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  return (
    <div>
      <h1>PatientList</h1>
    </div>
  );
}

export default PatientListPage;
