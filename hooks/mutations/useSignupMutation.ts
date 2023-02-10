import { useMutation } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";

const signUpUser = async ({
  email,
  password,
  firstName,
  lastName,
  confirmPassword,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}) => {
  console.log("REACHED HERE"); // nice

  return accessClient.post("/auth/signup", {
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
  });
};

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: signUpUser,
    onError: (error, variables, context) => {
      console.log(error);
      console.log(variables);
      console.log(context);
    },
  });
};
