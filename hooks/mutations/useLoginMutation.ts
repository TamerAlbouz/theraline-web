import { accessClient } from "../../utils/axios/axios";
import { useMutation } from "@tanstack/react-query";

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return accessClient.post("/auth/signin", { email, password });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
