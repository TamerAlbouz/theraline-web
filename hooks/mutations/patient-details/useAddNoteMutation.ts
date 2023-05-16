import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

const addNote = async ({
  title,
  body,
  user_id,
}: {
  title: string;
  body: string;
  user_id: string;
}) => {
  return accessClient.post(`/user/add_note`, {
    title,
    body,
    user_id,
  });
};

export const useAddNoteMutation = (patientId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["patient-notes", patientId],
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
