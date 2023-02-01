import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function PaymentInfoPage() {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  return (
    <div>
      <h1>PaymentInfo</h1>
    </div>
  );
}

export default PaymentInfoPage;
