import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const recreateCouple = async () => {
  const response = await apiClient.post(`/couples/recouple`);

  return response.data;
};

const useRecreateCouple = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: recreateCouple,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['coupleProfile'],
      });
    },
  });
};

export default useRecreateCouple;
