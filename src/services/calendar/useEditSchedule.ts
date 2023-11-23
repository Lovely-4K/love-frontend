import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { EditSchedule } from '~/types';
import apiClient from '~/api/apiClient';

interface EditScheduleParams {
  scheduleId: number;
  schedule: EditSchedule;
}

const editSchedule = async ({ scheduleId, schedule }: EditScheduleParams) => {
  const response = await apiClient.patch(`/calendars/${scheduleId}`, schedule);

  return response.data.body;
};

const useEditSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editSchedule,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['monthSchedule'],
      });
    },
  });
};

export default useEditSchedule;
