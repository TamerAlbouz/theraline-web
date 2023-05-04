import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";

const updateSettings = async ({
  firstName,
  lastName,
  image,
  phone,
}: {
  firstName: string;
  lastName: string;
  image: string;
  phone: string;
}) => {
  return accessClient.put(`/user/edit_doctor_info`, {
    firstName,
    lastName,
    image,
    phone,
  });
};

export const useUpdateSettingsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
