import { useMutation } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

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
    onError: (error: any) => {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
};
