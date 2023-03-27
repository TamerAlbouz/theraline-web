import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthBackgroundCard from "../../components/auth/AuthBackgroundCard";
import Link from "next/link";
import { useLoginMutation } from "../../hooks/mutations/useLoginMutation";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/auth/useAuth";

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type signInValues = z.infer<typeof signInSchema>;

function SignInPage() {
  const { mutate: login } = useLoginMutation();
  const { signin } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function submitUserInfo(data: signInValues) {
    console.log(data);

    login(data, {
      onSuccess: (data) => {
        console.log(data);

        signin(
          data.data.access_token,
          data.data.refresh_token,
          data.data.role[0]
        );

        router.push("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <AuthBackgroundCard>
      <form onSubmit={handleSubmit(submitUserInfo)}>
        <div className="mb-4">
          <label
            htmlFor="signin-email"
            className="text-md mb-2 block font-bold text-primary-dark"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: { value: true, message: "This field is required" },
            })}
            id="signin-email"
            type="text"
            placeholder="Email"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />{" "}
          <span className="text-xs text-red-500">{errors.email?.message}</span>
        </div>

        <div className="mb-4">
          <label
            htmlFor="signin-password"
            className="text-md mb-2 block font-bold text-primary-dark"
          >
            Password
          </label>
          <input
            {...register("password", {
              required: { value: true, message: "This field is required" },
            })}
            id="signin-password"
            type="text"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />{" "}
          <span className="text-xs text-red-500">
            {errors.password?.message}
          </span>
        </div>

        <div className="mt-4 flex justify-between">
          <Link replace href="/auth/signup">
            <a className="w-1/2 text-sm text-primary-dark hover:text-primary">
              Not a member? Join here
            </a>
          </Link>

          <input
            type="submit"
            value="Sign in"
            className="focus:shadow-outline cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-textColor hover:bg-primary-dark focus:outline-none"
          />
        </div>
      </form>
    </AuthBackgroundCard>
  );
}

export default SignInPage;
