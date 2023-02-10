import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthBackgroundCard from "../../components/auth/AuthBackgroundCard";
import Link from "next/link";
import { useSignUpMutation } from "../../hooks/mutations/useSignupMutation";

const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type signUpValues = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const { mutate: signup } = useSignUpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const submitUserInfo = async (data: any) => {
    console.log(data);

    let res = signup(data, {
      onError(error, variables, context) {
        console.log(error);
      },
    });

    console.log(res);
  };

  return (
    <AuthBackgroundCard>
      <form onSubmit={handleSubmit(submitUserInfo)} className="w-full">
        <div className="mb-4">
          <label
            htmlFor="signup-first-name"
            className="text-md mb-2 block font-bold text-primary-dark"
          >
            First Name
          </label>
          <input
            {...register("firstName", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-first-name"
            type="text"
            placeholder="First name"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />{" "}
          <span className="text-xs text-red-500">
            {errors.firstName?.message}
          </span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="signup-last-name"
            className="text-md mb-2 block font-bold text-primary-dark"
          >
            Last Name
          </label>
          <input
            {...register("lastName", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-last-name"
            type="text"
            placeholder="Last name"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />{" "}
          <span className="text-xs text-red-500">
            {errors.lastName?.message}
          </span>
        </div>

        <div className="mb-4">
          <label
            htmlFor="signup-email"
            className="text-md mb-2 block font-bold text-primary-dark"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-email"
            type="text"
            placeholder="Email"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />{" "}
          <span className="text-xs text-red-500">{errors.email?.message}</span>
        </div>

        <div className="mb-4">
          <label
            htmlFor="signup-password"
            className="text-md mb-2 block font-bold text-primary-dark"
          >
            Password
          </label>
          <input
            {...register("password", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-password"
            type="text"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />{" "}
          <span className="text-xs text-red-500">
            {errors.password?.message}
          </span>
        </div>

        <div className="mb-4">
          <label
            htmlFor="signup-confirm-password"
            className="text-md mb-2 block font-bold text-primary-dark"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-confirm-password"
            type="text"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />{" "}
          <span className="text-xs text-red-500">
            {errors.confirmPassword?.message}
          </span>
        </div>

        <div className="mt-4 flex justify-between">
          <Link replace href="/auth/signin">
            <a className="w-1/2 text-sm text-primary-dark hover:text-primary">
              Already a member? Sign in here
            </a>
          </Link>

          <input
            type="submit"
            value="Sign up"
            className="focus:shadow-outline cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-white hover:bg-primary-dark focus:outline-none"
          />
        </div>
      </form>
    </AuthBackgroundCard>
  );
};

export default SignUpPage;
