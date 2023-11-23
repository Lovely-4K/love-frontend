import { useQuery } from '@tanstack/react-query';
import type { CalendarSchedule } from '~/types';
import apiClient from '~/api/apiClient';

interface getRecentScheduleParams {
  limit: number;
  coupleMode: boolean;
}

const getRecentSchedule = async ({
  limit,
}: Pick<getRecentScheduleParams, 'limit'>): Promise<CalendarSchedule> => {
  const response = await apiClient.get(`/calendars/recent?limit=${limit}`);

  return response.data.body;
};

const useGetRecentSchedule = ({
  limit,
  coupleMode,
}: getRecentScheduleParams) => {
  return useQuery({
    queryKey: ['recentSchedule', limit],
    queryFn: () => getRecentSchedule({ limit }),
    enabled: coupleMode,
  });
};

export default useGetRecentSchedule;
