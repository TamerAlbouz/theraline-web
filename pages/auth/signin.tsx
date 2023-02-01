import { useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthBackgroundCard from "../../components/auth/AuthBackgroundCard";
import {
  labelClassName,
  inputClassName,
  buttonClassName,
  spanClassName,
  inputGroupClassName,
} from "../../components/auth/utils";
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
        <div className={inputGroupClassName}>
          <label htmlFor="signin-email" className={labelClassName}>
            Email
          </label>
          <input
            {...register("email", {
              required: { value: true, message: "This field is required" },
            })}
            id="signin-email"
            type="text"
            placeholder="Email"
            className={inputClassName}
          />{" "}
          <span className={spanClassName}>{errors.email?.message}</span>
        </div>

        <div className={inputGroupClassName}>
          <label htmlFor="signin-password" className={labelClassName}>
            Password
          </label>
          <input
            {...register("password", {
              required: { value: true, message: "This field is required" },
            })}
            id="signin-password"
            type="text"
            className={inputClassName}
          />{" "}
          <span className={spanClassName}>{errors.password?.message}</span>
        </div>

        <div className="mt-4 flex justify-between">
          <Link replace href="/auth/signup">
            <a className="w-1/2 text-sm text-primary-dark hover:text-primary">
              Not a member? Join here
            </a>
          </Link>

          <input type="submit" value="Sign in" className={buttonClassName} />
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
