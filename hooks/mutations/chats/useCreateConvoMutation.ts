import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

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
    onError: (error) => {
      console.log(error);
    },
  });
};
