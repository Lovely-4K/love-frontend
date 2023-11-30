import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const deleteSchedule = async ({ scheduleId }: { scheduleId: number }) => {
  const response = await apiClient.delete(`/calendars/${scheduleId}`);

  return response.data.body;
};

const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSchedule,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['monthSchedule'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['temperature'],
      });
    },
  });
};

export default useDeleteSchedule;
