import { useForm, Resolver } from "react-hook-form";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const submitUserInfo = async (data: any) => {
    console.log(data);

    await signIn("credentials", {
      username: data.username,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(submitUserInfo)}>
      <label htmlFor="signin-username">Username</label>
      <input
        {...register("username", {
          required: { value: true, message: "This field is required" },
        })}
        id="signin-username"
        type="text"
        placeholder="Username"
      />{" "}
      <span className="text-xs text-red-500">{errors.username?.message}</span>
      <br />
      <label htmlFor="signin-password">Password</label>
      <input
        {...register("password", {
          required: { value: true, message: "This field is required" },
        })}
        id="signin-password"
        type="text"
      />{" "}
      <span className="text-xs text-red-500">{errors.password?.message}</span>
      <br />
      <div className="mt-4 flex justify-end">
        <input
          type="submit"
          className="group rounded-xl bg-black px-4 py-2 text-white transition-all duration-200 hover:bg-gray-800"
        />
      </div>
    </form>
  );
};

export default SignInPage;
