import { useMutation } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";

const sendMessage = async ({
  text,
  chatId,
}: {
  text: string;
  chatId: string;
}) => {
  return accessClient.post(`/message/${chatId}/sendMessage`, { text });
};

export const useSendMessageMutation = () => {
  return useMutation({
    mutationFn: sendMessage,
  });
};
