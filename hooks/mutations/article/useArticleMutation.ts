import { useMutation } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

const createArticle = async ({
  title,
  content,
}: {
  title: string;
  content: string | null;
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
      toast.success("Article created!", {
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
    onError: (error) => {
      console.log(error);
    },
  });
};
