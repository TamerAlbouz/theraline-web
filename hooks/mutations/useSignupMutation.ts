import { useMutation } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import useAuthStore from "../stores/useAuthStore";

const signUpUser = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return accessClient.post("/auth/create_doctor", {
    firstName,
    lastName,
    email,
    password,
  });
};

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: signUpUser,
  });
};
