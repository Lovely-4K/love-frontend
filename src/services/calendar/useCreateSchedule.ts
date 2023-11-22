import { useMutation } from '@tanstack/react-query';
import type { EditSchedule } from '~/types';
import apiClient from '~/api/apiClient';

const createSchedule = async ({ schedule }: { schedule: EditSchedule }) => {
  const response = await apiClient.post('/calendars', schedule);

  return response.data.body;
};

const useCreateSchedule = () => {
  return useMutation({
    mutationFn: createSchedule,
  });
};

export default useCreateSchedule;
