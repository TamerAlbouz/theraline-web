import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function PaymentInfoPage() {
  const router = useRouter();

  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  console.log(status);
  console.log(data);

  return (
    <div>
      <h1>PaymentInfo</h1>
    </div>
  );
}

export default PaymentInfoPage;
