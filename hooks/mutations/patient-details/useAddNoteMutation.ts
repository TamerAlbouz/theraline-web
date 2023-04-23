import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";

const addNote = async ({
  title,
  body,
  user_id,
}: {
  title: string;
  body: string;
  user_id: string;
}) => {
  return accessClient.post(``, {
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
    onError: (error) => {
      console.log(error);
    },
  });
};
