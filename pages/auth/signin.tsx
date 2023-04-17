import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import AuthBackgroundCard from "../../components/auth/AuthBackgroundCard";
import { useLoginMutation } from "../../hooks/mutations/useLoginMutation";
import { useAuth } from "../../hooks/auth/useAuth";
import { CustomInput } from "../../components/auth/CustomInput";

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type SignInValues = z.infer<typeof signInSchema>;

function SignInPage() {
  const { mutate: login } = useLoginMutation();
  const { signin } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function submitUserInfo(data: SignInValues) {
    console.log(data);

    login(data, {
      onSuccess: (result) => {
        console.log(result);

        signin(
          result.data.access_token,
          result.data.refresh_token,
          result.data.role[0],
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
      <form
        onSubmit={handleSubmit(submitUserInfo)}
        className="flex w-full flex-col gap-5">
        <CustomInput
          label="Email"
          type="text"
          placeholder="Enter Your Email"
          register={register("email", {
            required: { value: true, message: "This field is required" },
          })}
          error={errors.email?.message}
          htmlForValue="signin-email"
        />
        <CustomInput
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          register={register("password", {
            required: { value: true, message: "This field is required" },
          })}
          error={errors.password?.message}
          htmlForValue="signin-password"
        />
        <div className="">
          <button
            type="submit"
            value="Sign in"
            className="focus:shadow-outline w-full cursor-pointer rounded-lg bg-primary py-3 px-4 font-bold text-textColor transition duration-300 ease-in-out hover:bg-primary-dark focus:outline-none disabled:cursor-default disabled:bg-gray-400 disabled:text-gray-600">
            Sign In
          </button>
        </div>
      </form>
    </AuthBackgroundCard>
  );
}

export default SignInPage;
