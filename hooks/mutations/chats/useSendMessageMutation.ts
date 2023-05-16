import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

const sendMessage = async ({
  text,
  chatId,
}: {
  text: string;
  chatId: string;
}) => {
  return accessClient.post(`/message/${chatId}/send_message`, {
    text,
  });
};

export const useSendMessageMutation = ({
  chatId,
}: {
  chatId: string | undefined;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });
      queryClient.invalidateQueries({
        queryKey: ["messages", chatId],
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
