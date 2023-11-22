import { useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from '~/types';
import apiClient from '~/api/apiClient';

const editProfile = async ({ data }: { data: User }) => {
  const formData = new FormData();
  formData.append(
    'texts',
    new Blob([JSON.stringify(data)], { type: 'application/json' }),
  );
  if (data.imageUrl instanceof Blob) {
    formData.append('images', data.imageUrl);
  }
  const response = await apiClient.patch(`/members`, formData);

  return response.data.body;
};

const useEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['coupleProfile'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['recentSchedule'],
      });
    },
  });
};

export default useEditProfile;
