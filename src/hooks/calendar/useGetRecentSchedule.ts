import { useQuery } from '@tanstack/react-query';
import type { CalendarSchedule } from '~/types';
import apiClient from '~/api/apiClient';

interface getRecentScheduleParams {
  limit: number;
}

const getRecentSchedule = async ({
  limit,
}: getRecentScheduleParams): Promise<CalendarSchedule> => {
  const response = await apiClient.get(`/calendars?recent=${limit}`);

  return response.data.body;
};

const useGetRecentSchedule = ({ limit }: getRecentScheduleParams) => {
  return useQuery({
    queryKey: ['recentSchedule', limit],
    queryFn: () => getRecentSchedule({ limit }),
  });
};

export default useGetRecentSchedule;
