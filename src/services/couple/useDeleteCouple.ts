import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const deleteCouple = async () => {
  const response = await apiClient.delete('/couples');

  return response.data;
};

const useDeleteCouple = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCouple,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['coupleProfile'],
      });
    },
  });
};

export default useDeleteCouple;
