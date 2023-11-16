import { useMutation } from '@tanstack/react-query';
import type { EditSchedule, Schedule } from '~/types';
import apiClient from '~/api/apiClient';

interface EditScheduleParams {
  scheduleId: string;
  schedule: EditSchedule;
}

const editSchedule = async ({ scheduleId, schedule }: EditScheduleParams) => {
  const response = await apiClient.patch(`/calendars/${scheduleId}`, schedule);

  return response.data.body;
};

const useEditSchedule = () => {
  return useMutation({
    mutationFn: editSchedule,
  });
};

export default useEditSchedule;
