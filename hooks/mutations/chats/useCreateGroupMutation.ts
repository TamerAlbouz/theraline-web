import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

const createGroup = async ({
  name,
  image,
  users_id,
}: {
  name: string;
  image: string;
  users_id: string[];
}) => {
  return accessClient.post("/groups/create_group", {
    users_id,
    name,
    image,
  });
};

export const useCreateGroupMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGroup,
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
