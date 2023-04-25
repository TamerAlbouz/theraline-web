import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

const createArticle = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  console.log(title, content);

  return accessClient.post("/articles/post", {
    title,
    content,
  });
};

export const useArticleMutation = () => {
  return useMutation({
    mutationFn: createArticle,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
