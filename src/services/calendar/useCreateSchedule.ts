import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { EditSchedule } from '~/types';
import apiClient from '~/api/apiClient';

const createSchedule = async ({ schedule }: { schedule: EditSchedule }) => {
  const response = await apiClient.post('/calendars', schedule);

  return response.data.body;
};

const useCreateSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSchedule,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['monthSchedule'],
      });
    },
  });
};

export default useCreateSchedule;
