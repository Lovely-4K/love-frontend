import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const createCouple = async (invitationCode: string) => {
  const response = await apiClient.post(
    `/couples?invitationCode=${invitationCode}`,
  );

  return response.data;
};

const useCreateCouple = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCouple,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['coupleProfile'],
      });
    },
  });
};

export default useCreateCouple;
