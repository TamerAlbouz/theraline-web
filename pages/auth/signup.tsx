import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  labelClassName,
  inputClassName,
  buttonClassName,
  spanClassName,
  inputGroupClassName,
} from "../../components/auth/utils";
import AuthBackgroundCard from "../../components/auth/AuthBackgroundCard";
import Link from "next/link";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const submitUserInfo = async (data: any) => {
    console.log(data);
  };

  return (
    <AuthBackgroundCard>
      <form onSubmit={handleSubmit(submitUserInfo)} className="w-full">
        <div className={inputGroupClassName}>
          <label htmlFor="signup-first-name" className={labelClassName}>
            First Name
          </label>
          <input
            {...register("firstName", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-first-name"
            type="text"
            placeholder="First name"
            className={inputClassName}
          />{" "}
          <span className={spanClassName}>{errors.firstName?.message}</span>
        </div>
        <div className={inputGroupClassName}>
          <label htmlFor="signup-last-name" className={labelClassName}>
            Last Name
          </label>
          <input
            {...register("lastName", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-last-name"
            type="text"
            placeholder="Last name"
            className={inputClassName}
          />{" "}
          <span className={spanClassName}>{errors.lastName?.message}</span>
        </div>

        <div className={inputGroupClassName}>
          <label htmlFor="signup-email" className={labelClassName}>
            Email
          </label>
          <input
            {...register("email", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-email"
            type="text"
            placeholder="Email"
            className={inputClassName}
          />{" "}
          <span className={spanClassName}>{errors.email?.message}</span>
        </div>

        <div className={inputGroupClassName}>
          <label htmlFor="signup-password" className={labelClassName}>
            Password
          </label>
          <input
            {...register("password", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-password"
            type="text"
            className={inputClassName}
          />{" "}
          <span className={spanClassName}>{errors.password?.message}</span>
        </div>

        <div className={inputGroupClassName}>
          <label htmlFor="signup-confirm-password" className={labelClassName}>
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: { value: true, message: "This field is required" },
            })}
            id="signup-confirm-password"
            type="text"
            className={inputClassName}
          />{" "}
          <span className={spanClassName}>
            {errors.confirmPassword?.message}
          </span>
        </div>

        <div className="mt-4 flex justify-between">
          <Link replace href="/auth/signin">
            <a className="w-1/2 text-sm text-primary-dark hover:text-primary">
              Already a member? Sign in here
            </a>
          </Link>

          <input type="submit" value="Sign up" className={buttonClassName} />
        </div>
      </form>
    </AuthBackgroundCard>
  );
};

export default SignUpPage;
