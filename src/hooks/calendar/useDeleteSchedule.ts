import { useMutation } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const deleteSchedule = async ({ scheduleId }: { scheduleId: number }) => {
  const response = await apiClient.delete(`/calendars/${scheduleId}`);

  return response.data.body;
};

const useDeleteSchedule = () => {
  return useMutation({
    mutationFn: deleteSchedule,
  });
};

export default useDeleteSchedule;
