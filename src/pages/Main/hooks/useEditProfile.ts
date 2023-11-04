import { useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from '~/types';
import apiClient from '~/api/apiClient';

const editProfile = async (data: User) => {
  const response = await apiClient.patch('/members?memberId=1', data);

  return response.data.body;
};

const useEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profile'],
      });
    },
  });
};

export default useEditProfile;
