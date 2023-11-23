import { useQueryClient, useMutation } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const editCoupleProfile = async (meetDay: string) => {
  const response = await apiClient.patch('/couples', { meetDay });

  return response.data;
};

const useEditCoupleProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editCoupleProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['coupleProfile'],
      });
    },
  });
};

export default useEditCoupleProfile;
