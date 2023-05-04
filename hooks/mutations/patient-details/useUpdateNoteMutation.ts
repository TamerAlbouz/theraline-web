import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

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
    console.log( {
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
    onError: (error) => {
      console.log(error);
    },
  });
};
