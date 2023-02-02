import { useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthBackgroundCard from "../../components/card/AuthBackgroundCard";
import Link from "next/link";

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type signInValues = z.infer<typeof signInSchema>;

const SignInPage = () => {
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

  const submitUserInfo = async (data: any) => {
    console.log(data);

    await signIn("credentials", {
      email: data.email,
      password: data.password,
    });
  };

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
            className="focus:shadow-outline cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-white hover:bg-primary-dark focus:outline-none"
          />
        </div>
      </form>
    </AuthBackgroundCard>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permenant: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default SignInPage;
