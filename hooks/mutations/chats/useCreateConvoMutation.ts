import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

const createConvo = async ({ users_id }: { users_id: string[] }) => {
  return accessClient.post("/groups/create_convo", {
    users_id,
  });
};

export const useCreateConvoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createConvo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });
    },
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
