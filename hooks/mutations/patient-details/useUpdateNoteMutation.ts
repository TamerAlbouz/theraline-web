import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { toast } from "react-toastify";

const updateNote = async ({
  title,
  body,
  user_id,
  noteId,
}: {
  title: string;
  body: string;
  user_id: string;
  noteId: string;
}) => {
  console.log({
    _id: noteId,
    title,
    body,
  });
  return accessClient.put(`/user/update_note/${noteId}`, {
    _id: noteId,
    title,
    body,
  });
};

export const useUpdateNoteMutation = (patientId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNote,
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
